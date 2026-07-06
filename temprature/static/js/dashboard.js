// Temprature Monitor Dashboard — IoT Light Theme
// ============================================================

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
    url = url.replace(/\/+$/, '');  // strip trailing slash
    BACKEND_URL = url;
    localStorage.setItem('backend_url', url);
}
function apiUrl(path) {
    return getBackendUrl() + path;
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
    if (data.temp_c !== null && data.temp_c !== undefined) {
        document.getElementById('val-temp').textContent = data.temp_c.toFixed(2);
        document.getElementById('status-temp').textContent = data.temp_ok ? 'TMP117 正常' : '传感器异常';
    } else {
        document.getElementById('val-temp').textContent = '--';
        document.getElementById('status-temp').textContent = '等待传感器就绪';
    }
    document.getElementById('val-current').textContent = data.cur_ua != null ? data.cur_ua.toFixed(2) : '--';
    document.getElementById('status-current').textContent = '分压链 3x100kOhm';
    document.getElementById('val-voltage').textContent = data.voltage_v != null ? data.voltage_v.toFixed(3) : '--';
    if (data.volt_pin_v != null) {
        document.getElementById('status-voltage').textContent = '引脚 ' + data.volt_pin_v.toFixed(3) + 'V';
    }
    document.getElementById('val-battery').textContent = data.divider_bat_v != null ? data.divider_bat_v.toFixed(3) : '--';
    if (data.esp_ms) {
        var sec = Math.floor(data.esp_ms / 1000);
        document.getElementById('val-uptime').textContent = Math.floor(sec/60) + ':' + String(sec%60).padStart(2,'0');
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

// ---------- History ----------
async function loadHistory() {
    try {
        var rows = await (await fetch(apiUrl('/history?limit=500'))).json();
        document.getElementById('history-count').textContent = rows.length + ' 条';
        document.querySelector('#history-table tbody').innerHTML = rows.map(function(r) {
            return '<tr><td>' + new Date(r.timestamp * 1000).toLocaleString('zh-CN') +
                '</td><td>' + (r.temp_c != null ? r.temp_c.toFixed(2) : '--') +
                '</td><td>' + (r.cur_ua != null ? r.cur_ua.toFixed(2) : '--') +
                '</td><td>' + (r.voltage_v != null ? r.voltage_v.toFixed(4) : '--') +
                '</td><td>' + (r.divider_bat_v != null ? r.divider_bat_v.toFixed(3) : '--') +
                '</td><td>' + (r.temp_ok ? 'YES' : 'WARN') + '</td></tr>';
        }).join('');
    } catch (e) {}
}

async function exportCSV() {
    try {
        var rows = await (await fetch(apiUrl('/history?limit=10000'))).json();
        var csv = '﻿时间,温度(°C),电流(uA),电压(V),电池(V),正常运行\n';
        rows.forEach(function(r) {
            csv += new Date(r.timestamp*1000).toISOString() + ',' + r.temp_c + ',' + r.cur_ua + ',' + r.voltage_v + ',' + r.divider_bat_v + ',' + r.temp_ok + '\n';
        });
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'temprature_' + new Date().toISOString().slice(0,10) + '.csv';
        a.click(); URL.revokeObjectURL(a.href);
    } catch (e) {}
}

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
