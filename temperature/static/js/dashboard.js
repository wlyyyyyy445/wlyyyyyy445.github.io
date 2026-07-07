// Temprature Monitor Dashboard — IoT Light Theme
// ============================================================

// ---------- Client Identity (unique per browser) ----------
function getClientId() {
    // Allow URL param override (for Flutter/Desktop to set unique ID)
    var params = new URLSearchParams(window.location.search);
    var urlCid = params.get('client_id');
    if (urlCid) return urlCid;
    var cid = localStorage.getItem('client_id');
    if (!cid) {
        cid = 'c_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
        localStorage.setItem('client_id', cid);
    }
    return cid;
}
function apiUrl(path) {
    var url = getBackendUrl() + path;
    // Append client_id to all API calls
    var sep = path.indexOf('?') >= 0 ? '&' : '?';
    return url + sep + 'client_id=' + encodeURIComponent(getClientId());
}

// ---------- Backend URL (configurable, persists in localStorage) ----------
let BACKEND_URL = '';
function getBackendUrl() {
    if (BACKEND_URL) return BACKEND_URL;
    const saved = localStorage.getItem('backend_url');
    if (saved) { BACKEND_URL = saved; return BACKEND_URL; }
    // Default: same host as this page (local dev mode)
    BACKEND_URL = location.protocol + '//' + location.host;
    return BACKEND_URL;
}
function setBackendUrl(url) {
    url = url.replace(/\/+$/, '');
    BACKEND_URL = url;
    localStorage.setItem('backend_url', url);
}

// ---------- State ----------
const MAX_POINTS = 180;
const tempData = { labels: [], values: [] };
const currentData = { labels: [], values: [] };
const voltageData = { labels: [], values: [] };

// ---------- WebSocket ----------
let ws = null;
let wsReconnectTimer = null;

function connectWS() {
    if (ws && ws.readyState === WebSocket.OPEN) return;
    const backend = getBackendUrl();
    const proto = backend.startsWith('https') ? 'wss' : 'ws';
    const host = backend.replace(/^https?:\/\//, '');
    ws = new WebSocket(`${proto}://${host}/ws`);

    ws.onopen = () => {
        console.log('[WS] connected to ' + host);
        if (wsReconnectTimer) { clearTimeout(wsReconnectTimer); wsReconnectTimer = null; }
    };

    ws.onmessage = (event) => {
        try { updateDashboard(JSON.parse(event.data)); } catch (e) {}
    };

    ws.onclose = () => { wsReconnectTimer = setTimeout(connectWS, 3000); };
    ws.onerror = () => { ws.close(); };
}

// ---------- Dashboard Update ----------
function updateDashboard(data) {
    // Only filter simulator data (c_ prefix = auto-generated client IDs)
    // BLE relay and serial data pass through for all clients
    if (data.client_id && data.client_id.startsWith('c_') && data.client_id !== getClientId()) return;
    if (data.temp_c !== null && data.temp_c !== undefined) {
        document.getElementById('val-temp').textContent = data.temp_c.toFixed(2);
        document.getElementById('status-temp').textContent = data.temp_ok ? 'TMP117 normal' : 'Sensor error';
    }
    document.getElementById('val-current').textContent = data.cur_ua != null ? data.cur_ua.toFixed(2) : '--';
    document.getElementById('status-current').textContent = 'Divider 3x100kΩ';
    document.getElementById('val-voltage').textContent = data.voltage_v != null ? data.voltage_v.toFixed(3) : '--';
    document.getElementById('status-voltage').textContent = data.volt_pin_v != null ? 'pin ' + data.volt_pin_v.toFixed(3) + 'V' : '';
    document.getElementById('val-battery').textContent = data.divider_bat_v != null ? data.divider_bat_v.toFixed(3) : '--';
    document.getElementById('sub-battery').textContent = 'Divider 3x100kΩ';
    if (data.esp_ms) {
        var sec = Math.floor(data.esp_ms / 1000);
        document.getElementById('val-uptime').textContent = Math.floor(sec/60) + ':' + String(sec%60).padStart(2,'0');
        document.getElementById('sub-uptime').textContent = 'ESP32-C3';
    }
    var now = new Date().toLocaleTimeString();
    addPoint(tempChart, tempData, now, data.temp_c, cfg.tempMax, cfg.tempMin);
    addPoint(currentChart, currentData, now, data.cur_ua, cfg.currentMax, null);
    addPoint(voltageChart, voltageData, now, data.voltage_v, cfg.voltageMax, cfg.voltageMin);
    checkThresholds(data);
}

// ---------- Thresholds ----------
var cfg = { tempMax: 30, tempMin: 0, currentMax: 1000, voltageMax: 5.0, voltageMin: 2.8 };

function checkThresholds(data) {
    var tc = document.querySelector('.card-temp');
    var cc = document.querySelector('.card-current');
    var vc = document.querySelector('.card-voltage');
    var al = function(card, cond) {
        if (cond) { card.style.borderColor = 'var(--danger)'; card.style.borderWidth = '2px'; }
        else { card.style.borderColor = ''; card.style.borderWidth = ''; }
    };
    al(tc, data.temp_c !== null && (data.temp_c > cfg.tempMax || data.temp_c < cfg.tempMin));
    al(cc, data.cur_ua > cfg.currentMax);
    al(vc, data.voltage_v !== null && data.voltage_v < cfg.voltageMin);
}

// ---------- Chart Helpers ----------
function addPoint(chart, store, label, value, maxVal, minVal) {
    if (value === null || value === undefined) return;
    store.labels.push(label);
    store.values.push(value);
    if (store.labels.length > MAX_POINTS) { store.labels.shift(); store.values.shift(); }
    chart.data.labels = store.labels;
    chart.data.datasets[0].data = store.values;
    if (chart.data.datasets.length > 1 && maxVal !== null)
        chart.data.datasets[1].data = Array(store.labels.length).fill(maxVal);
    if (chart.data.datasets.length > 2 && minVal !== null)
        chart.data.datasets[2].data = Array(store.labels.length).fill(minVal);
    chart.update('none');
}

function createChart(canvasId, color, label, maxLine, minLine) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var datasets = [{
        label: label, data: [], borderColor: color,
        backgroundColor: color + '18', borderWidth: 2,
        fill: true, tension: 0.3, pointRadius: 1,
    }];
    if (maxLine !== null) datasets.push({
        label: '上限', data: [], borderColor: '#EF4444',
        borderDash: [5,5], borderWidth: 1, pointRadius: 0, fill: false
    });
    if (minLine !== null) datasets.push({
        label: '下限', data: [], borderColor: '#F59E0B',
        borderDash: [5,5], borderWidth: 1, pointRadius: 0, fill: false
    });
    return new Chart(ctx, {
        type: 'line', data: { labels: [], datasets: datasets },
        options: {
            responsive: true, maintainAspectRatio: false, animation: { duration: 200 },
            interaction: { intersect: false, mode: 'nearest' },
            scales: {
                x: { ticks: { maxTicksLimit: 6, font: { size: 10 }, color: '#9CA3AF' }, grid: { color: '#F3F4F6' } },
                y: { ticks: { font: { size: 10 }, color: '#9CA3AF' }, grid: { color: '#F3F4F6' } },
            },
            plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
        },
    });
}

var tempChart, currentChart, voltageChart;

function initCharts() {
    tempChart = createChart('chart-temp', '#3B82F6', '温度 °C', cfg.tempMax, cfg.tempMin);
    currentChart = createChart('chart-current', '#10B981', '电流 uA', cfg.currentMax, null);
    voltageChart = createChart('chart-voltage', '#F59E0B', '电压 V', cfg.voltageMax, cfg.voltageMin);
}

// ---------- Tab Switching ----------
function initTabs() {
    document.querySelectorAll('.tab:not(.disabled)').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
            var el = document.getElementById('tab-' + tab.dataset.tab);
            if (el) el.classList.add('active');
            if (tab.dataset.tab === 'history') loadHistory();
        });
    });
}

// ---------- History / Sessions ----------
var currentSessionId = null;

var _allSessions = [];
var _filterType = 'all';

function filterSessions(type) {
    _filterType = type;
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    if (event && event.target) event.target.classList.add('active');
    renderSessions();
}

function renderSessions() {
    var sessions = _allSessions;
    if (_filterType !== 'all') {
        sessions = sessions.filter(function(s) { return (s.device_type || 'Web') === _filterType; });
    }
    document.getElementById('history-count').textContent = sessions.length + ' sessions';

    // Group by date
    var groups = {};
    sessions.forEach(function(s) {
        var d = new Date(s.started_at * 1000);
        var key = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
        if (!groups[key]) groups[key] = [];
        groups[key].push(s);
    });
    var keys = Object.keys(groups).sort().reverse();

    var html = '';
    keys.forEach(function(key) {
        html += '<div style="font-size:0.8rem;color:var(--text-sub);font-weight:600;margin:0.75rem 0 0.5rem">📅 ' + key + '</div>';
        groups[key].forEach(function(s) {
            var d = new Date(s.started_at * 1000);
            var timeStr = String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
            var dur = s.ended_at ? Math.round((s.ended_at - s.started_at) / 60) + 'min' : 'ongoing';
            var label = s.client_name || s.client_id || 'unknown';
            var device = s.device_type || 'Web';
            var deviceIcon = device === 'Desktop' ? '💻' : (device === 'Flutter' ? '📱' : '🌐');
            var st = s.stats;
            html += '<div class="session-card" onclick="openSession(' + s.id + ')">' +
                '<div class="session-card-left">' +
                '<div class="session-card-date">📊 ' + timeStr +
                ' <span style="font-size:0.75rem;color:#8B5CF6;background:#F5F3FF;padding:2px 6px;border-radius:4px">' + deviceIcon + ' ' + label + '</span>' +
                '</div>' +
                '<div class="session-card-meta">' + dur + ' · ' + (s.source || 'unknown') + '</div>' +
                (st.temp_avg ? '<div class="session-card-stats"><span>🌡 ' + st.temp_avg + '°C (' + st.temp_min + '~' + st.temp_max + ')</span><span>⚡ ' + st.cur_avg + 'μA</span><span>🔌 ' + st.volt_avg + 'V</span></div>' : '') +
                '</div>' +
                '<div class="session-card-right"><div class="session-card-count">' + s.record_count + '</div><div class="session-card-source">records</div></div>' +
                '</div>';
        });
    });
    document.getElementById('session-list').innerHTML = html || '<p style="color:var(--text-muted);text-align:center;padding:2rem">No sessions yet.</p>';
}

async function loadHistory() {
    try {
        _allSessions = await (await fetch(getBackendUrl() + '/api/sessions?limit=200')).json();
        renderSessions();
    } catch (e) { console.error(e); }
}

async function openSession(id) {
    currentSessionId = id;
    try {
        var rows = await (await fetch(getBackendUrl() + '/api/sessions/' + id)).json();
        var sessions = await (await fetch(getBackendUrl() + '/api/sessions?limit=50')).json();
        var s = sessions.find(function(x) { return x.id === id; });
        if (!s) return;

        document.getElementById('modal-title').textContent = 'Session #' + id;
        document.getElementById('modal-record-count').textContent = rows.length + ' records';

        // Stats
        var st = s.stats;
        var statsHtml = '';
        if (st.temp_avg) {
            statsHtml += '<div class="stat-card"><div class="lbl">🌡 Temp °C</div><div class="val">' + st.temp_avg + '</div><div class="lbl">' + st.temp_min + ' ~ ' + st.temp_max + '</div></div>';
            statsHtml += '<div class="stat-card"><div class="lbl">⚡ Current μA</div><div class="val">' + st.cur_avg + '</div><div class="lbl">' + st.cur_min + ' ~ ' + st.cur_max + '</div></div>';
            statsHtml += '<div class="stat-card"><div class="lbl">🔌 Voltage V</div><div class="val">' + st.volt_avg + '</div><div class="lbl">' + st.volt_min + ' ~ ' + st.volt_max + '</div></div>';
        }
        document.getElementById('modal-stats').innerHTML = statsHtml;

        // Build charts
        var labels = [], temps = [], curs = [], volts = [];
        rows.forEach(function(r) {
            labels.push(new Date(r.timestamp * 1000).toLocaleTimeString());
            if (r.temp_c != null) temps.push(r.temp_c); else temps.push(null);
            curs.push(r.cur_ua); volts.push(r.voltage_v);
        });
        renderChart('m-chart-temp', '#3B82F6', temps, '°C');
        renderChart('m-chart-cur', '#10B981', curs, 'μA');
        renderChart('m-chart-volt', '#F59E0B', volts, 'V');

        document.getElementById('session-modal').style.display = 'flex';
    } catch (e) { console.error(e); }
}

function closeModal() {
    document.getElementById('session-modal').style.display = 'none';
    currentSessionId = null;
    // Destroy modal charts
    ['m-chart-temp','m-chart-cur','m-chart-volt'].forEach(function(id) {
        var inst = Chart.getChart(id); if (inst) inst.destroy();
    });
}

function renderChart(canvasId, color, data, unit) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var inst = Chart.getChart(canvasId); if (inst) inst.destroy();
    new Chart(ctx, {
        type: 'line', data: { labels: data.map(function(_,i){return i;}), datasets: [{
            label: unit, data: data, borderColor: color, backgroundColor: color + '18',
            borderWidth: 2, fill: true, tension: 0.3, pointRadius: 0,
        }]},
        options: {
            responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
            scales: {
                x: { ticks: { maxTicksLimit: 8, font: { size: 10 }, color: '#9CA3AF' }, grid: { color: '#F3F4F6' } },
                y: { ticks: { font: { size: 10 }, color: '#9CA3AF' }, grid: { color: '#F3F4F6' } },
            },
            plugins: { legend: { display: false } },
        },
    });
}

async function exportSession(format) {
    if (!currentSessionId) return;
    window.open(getBackendUrl() + '/api/sessions/' + currentSessionId + '/export?format=' + format, '_blank');
}

async function deleteCurrentSession() {
    if (!currentSessionId) return;
    if (!confirm('Delete session #' + currentSessionId + ' and all its data? This cannot be undone.')) return;
    await fetch(getBackendUrl() + '/api/sessions/' + currentSessionId, { method: 'DELETE' });
    closeModal();
    loadHistory();
}

async function exportChartImages() {
    var ids = ['m-chart-temp','m-chart-cur','m-chart-volt'];
    var names = ['temperature','current','voltage'];
    for (var i = 0; i < ids.length; i++) {
        var chart = Chart.getChart(ids[i]);
        if (!chart) continue;
        var a = document.createElement('a');
        a.href = chart.toBase64Image('image/png', 1);
        a.download = 'session_' + currentSessionId + '_' + names[i] + '.png';
        a.click();
    }
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('session-modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
});

// ---------- Serial ----------
async function scanPorts() {
    try {
        var ports = await (await fetch(apiUrl('/api/ports'))).json();
        var sel = document.getElementById('port-select');
        sel.innerHTML = '<option value="">-- 选择串口 --</option>' + ports.map(function(p) {
            return '<option value="' + p.device + '">' + p.device + ' - ' + p.description + '</option>';
        }).join('');
    } catch (e) {}
}
async function connectPort() {
    var port = document.getElementById('port-select').value;
    if (!port) return alert('请先选择串口');
    var data = await (await fetch(apiUrl('/api/connect'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ port: port }) })).json();
    if (data.ok) updateConn(true, port); else alert('连接失败: ' + data.error);
}
async function disconnectPort() { await fetch(apiUrl('/api/disconnect'), { method: 'POST' }); updateConn(false); }
function updateConn(ok, port) {
    document.getElementById('conn-indicator').className = 'status-dot ' + (ok ? 'connected' : 'disconnected');
    document.getElementById('conn-text').textContent = ok ? '已连接' : '未连接';
    document.getElementById('conn-port').textContent = ok ? (port || '') : '';
}
setInterval(async function() {
    try { var s = await (await fetch(apiUrl('/api/status'))).json(); updateConn(s.connected, s.port); } catch (e) {}
}, 5000);

// ---------- Recording Control (unified Sim + BLE + Serial) ----------
function getDeviceInfo() {
    var params = new URLSearchParams(window.location.search);
    var clientType = params.get('type') || 'Web';
    var name = clientType + ' (' + (navigator.platform || 'web') + ')';
    return { name: name, type: clientType };
}

function clearDashboard() {
    tempData.labels = []; tempData.values = [];
    currentData.labels = []; currentData.values = [];
    voltageData.labels = []; voltageData.values = [];
    if (tempChart) { tempChart.data.labels = []; tempChart.data.datasets.forEach(function(d) { d.data = []; }); tempChart.update('none'); }
    if (currentChart) { currentChart.data.labels = []; currentChart.data.datasets.forEach(function(d) { d.data = []; }); currentChart.update('none'); }
    if (voltageChart) { voltageChart.data.labels = []; voltageChart.data.datasets.forEach(function(d) { d.data = []; }); voltageChart.update('none'); }
    document.getElementById('val-temp').textContent = '--';
    document.getElementById('val-current').textContent = '--';
    document.getElementById('val-voltage').textContent = '--';
    document.getElementById('val-battery').textContent = '--';
    document.getElementById('val-uptime').textContent = '--';
}

var isRecording = false;
var recordingTimer = null;

async function toggleRecording() {
    var btn = document.getElementById('btn-recording');
    btn.disabled = true;
    try {
        if (isRecording) {
            // Stop everything
            await fetch(apiUrl('/api/recording/stop'), { method: 'POST' });
            await fetch(apiUrl('/api/simulator/stop'), { method: 'POST' });
            updateRecordBtn(false);
        } else {
            // Start recording. Only start simulator if no real source connected.
            var status = await (await fetch(apiUrl('/api/status'))).json();
            var hasRealSource = status.connected || bleConnected;
            var dev = getDeviceInfo();
            var source = bleConnected ? 'ble' : (status.connected ? 'serial' : 'simulator');
            await fetch(apiUrl('/api/recording/start') + '&source=' + source + '&client_name=' + encodeURIComponent(dev.name) + '&device_type=' + dev.type, { method: 'POST' });
            if (!hasRealSource) {
                // No real device - start simulator for demo data
                await fetch(apiUrl('/api/simulator/start') + '&client_name=' + encodeURIComponent(dev.name) + '&device_type=' + dev.type, { method: 'POST' });
            }
            updateRecordBtn(true);
        }
    } catch(e) { console.error(e); }
    btn.disabled = false;
}

function updateRecordBtn(running) {
    isRecording = running;
    var btn = document.getElementById('btn-recording');
    var info = document.getElementById('recording-info');
    if (running) {
        btn.textContent = '⏹ ' + t('stopRecord');
        btn.classList.add('active');
        // Start duration timer
        var start = Date.now();
        if (recordingTimer) clearInterval(recordingTimer);
        recordingTimer = setInterval(function() {
            var sec = Math.floor((Date.now() - start) / 1000);
            info.textContent = Math.floor(sec/60) + ':' + String(sec%60).padStart(2,'0');
        }, 1000);
    } else {
        btn.textContent = '🔴 ' + t('startRecord');
        btn.classList.remove('active');
        info.textContent = '';
        if (recordingTimer) { clearInterval(recordingTimer); recordingTimer = null; }
    }
}

// Poll recording status
setInterval(async function() {
    try {
        var s = await (await fetch(apiUrl('/api/recording/status'))).json();
        if (s.recording !== isRecording) updateRecordBtn(s.recording);
        // Also check sim status for sync
    } catch(e) {}
}, 2000);

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', function() {
    // Backend URL
    const backendInput = document.getElementById('backend-url');
    if (backendInput) {
        backendInput.value = getBackendUrl();
        document.getElementById('btn-save-backend')?.addEventListener('click', function() {
            setBackendUrl(backendInput.value.trim() || (location.protocol + '//' + location.host));
            backendInput.value = getBackendUrl();
            connectWS();
            scanPorts();
        });
    }

    initCharts();
    initTabs();
    connectWS();
    scanPorts();
    document.getElementById('btn-scan')?.addEventListener('click', scanPorts);
    document.getElementById('btn-connect')?.addEventListener('click', connectPort);
    document.getElementById('btn-disconnect')?.addEventListener('click', disconnectPort);
    document.getElementById('btn-refresh-history')?.addEventListener('click', loadHistory);
    document.getElementById('btn-export-csv')?.addEventListener('click', exportCSV);
    document.getElementById('btn-save-thresholds')?.addEventListener('click', function() {
        cfg.tempMax = +document.getElementById('thresh-temp').value || 30;
        cfg.tempMin = +document.getElementById('thresh-temp-min').value || 0;
        cfg.currentMax = +document.getElementById('thresh-current').value || 1000;
        cfg.voltageMin = +document.getElementById('thresh-voltage').value || 2.8;
        alert('阈值已保存');
    });
});
