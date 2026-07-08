// Web Bluetooth BLE Receiver — 浏览器直接接收ESP32 BLE数据
// 1000Hz 批量二进制格式: [count:u8][base_ms:u32 LE][count x 6B readings]

const NUS_SERVICE = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
const NUS_TX = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";

let bleDevice = null;
let bleServer = null;
let bleConnected = false;
let bleAutoReconnect = false;
let bleReconnectTimer = null;

// Calibration (matches v2 — analogReadMilliVolts)
const TMP117_LSB_C = 0.0078125;
const CURRENT_SENSE_R = 100000.0;
const DIVIDER_SCALE = 3.0;

function parseBinaryBatch(buffer) {
    const data = new Uint8Array(buffer);
    if (data.length < 5) return [];
    const count = data[0];
    if (count === 0 || count > 30) return [];
    const baseMs = data[1] | (data[2] << 8) | (data[3] << 16) | (data[4] << 24);
    const readings = [];
    let offset = 5;
    for (let i = 0; i < count; i++) {
        if (offset + 6 > data.length) break;
        const tempRaw = (data[offset] | (data[offset + 1] << 8)) << 16 >> 16;
        const curMv   = data[offset + 2] | (data[offset + 3] << 8);
        const voltMv  = data[offset + 4] | (data[offset + 5] << 8);
        offset += 6;
        const curPinV = curMv / 1000.0;
        const voltPinV = voltMv / 1000.0;
        readings.push({
            esp_ms: baseMs + i,
            temp_ok: tempRaw !== 0 ? 1 : 0,
            temp_c: parseFloat((tempRaw * TMP117_LSB_C).toFixed(2)),
            cur_raw: curMv,
            cur_pin_v: parseFloat(curPinV.toFixed(6)),
            cur_ua: parseFloat(((curPinV / CURRENT_SENSE_R) * 1000000).toFixed(3)),
            divider_bat_v: parseFloat((curPinV * DIVIDER_SCALE).toFixed(3)),
            volt_raw: voltMv,
            volt_pin_v: parseFloat(voltPinV.toFixed(6)),
            voltage_v: parseFloat(voltPinV.toFixed(6)),
            source: "web_ble",
            client_id: getClientId(),
        });
    }
    return readings;
}

let _backendUnreachable = false;
let _postBuffer = [];
let _lastCardUpdate = 0;

function flushPostBuffer() {
    if (_postBuffer.length === 0) return;
    const batch = _postBuffer.splice(0);
    fetch(getBackendUrl() + "/api/data_batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ readings: batch }),
    }).then(function() {
        if (_backendUnreachable) { _backendUnreachable = false; }
    }).catch(function() {
        if (!_backendUnreachable) { _backendUnreachable = true; }
    });
}

setInterval(flushPostBuffer, 1000);  // post to backend once per second

function handleBLENotification(event) {
    const readings = parseBinaryBatch(event.target.value.buffer);
    if (readings.length === 0) return;

    // Throttle DOM updates to ~4Hz
    var now = Date.now();
    if (now - _lastCardUpdate > 250) {
        _lastCardUpdate = now;
        updateCardsFromData(readings[readings.length - 1]);
    }
    updateWaveform(readings);

    // Buffer for backend
    for (var i = 0; i < readings.length; i++) {
        _postBuffer.push(readings[i]);
    }
    // Keep buffer from growing too large
    if (_postBuffer.length > 100) {
        _postBuffer = _postBuffer.slice(-100);
    }
}
}

function updateBLEStatus(msg) {
    const el = document.getElementById("ble-status");
    if (el) el.textContent = msg;
}

async function toggleBLE() {
    if (bleConnected) {
        bleAutoReconnect = false;
        await disconnectBLE();
        return;
    }
    bleAutoReconnect = true;
    await connectBLE();
}

async function connectBLE() {
    if (!navigator.bluetooth) {
        alert("Web Bluetooth 需要 HTTPS。\n请访问 https://luyaowang.com/temperature/");
        return;
    }
    const btn = document.getElementById("btn-ble-connect");
    btn.disabled = true;
    updateBLEStatus("扫描中...");

    try {
        bleDevice = await navigator.bluetooth.requestDevice({
            filters: [{ services: [NUS_SERVICE] }],
            optionalServices: [NUS_SERVICE],
        });
        updateBLEStatus("连接中...");

        bleServer = await bleDevice.gatt.connect();
        bleDevice.addEventListener("gattserverdisconnected", onBLEDisconnect);

        const service = await bleServer.getPrimaryService(NUS_SERVICE);
        const txChar = await service.getCharacteristic(NUS_TX);
        await txChar.startNotifications();
        txChar.addEventListener("characteristicvaluechanged", handleBLENotification);

        bleConnected = true;
        btn.textContent = "🔗 BLE ✓";
        btn.classList.add("active");
        updateBLEStatus(bleDevice.name || "已连接");
    } catch (e) {
        console.error("[BLE] Connect failed:", e);
        updateBLEStatus("连接失败, 点击重试");
        bleConnected = false;
        bleAutoReconnect = false;
    }
    btn.disabled = false;
}

function onBLEDisconnect() {
    bleConnected = false;
    bleServer = null;
    const btn = document.getElementById("btn-ble-connect");
    btn.textContent = "🔗 BLE ⟳";
    btn.classList.remove("active");
    updateBLEStatus("已断开, 自动重连中...");

    if (bleAutoReconnect) {
        if (bleReconnectTimer) clearTimeout(bleReconnectTimer);
        bleReconnectTimer = setTimeout(tryReconnect, 2000);
    }
}

async function tryReconnect() {
    if (bleConnected || !bleDevice) return;
    updateBLEStatus("重连中...");
    try {
        bleServer = await bleDevice.gatt.connect();
        bleDevice.addEventListener("gattserverdisconnected", onBLEDisconnect);
        const service = await bleServer.getPrimaryService(NUS_SERVICE);
        const txChar = await service.getCharacteristic(NUS_TX);
        await txChar.startNotifications();
        txChar.addEventListener("characteristicvaluechanged", handleBLENotification);

        bleConnected = true;
        const btn = document.getElementById("btn-ble-connect");
        btn.textContent = "🔗 BLE ✓";
        btn.classList.add("active");
        updateBLEStatus(bleDevice.name || "已重连");
    } catch (e) {
        updateBLEStatus("重连失败, " + (bleReconnectTimer ? "继续尝试..." : ""));
        if (bleAutoReconnect) {
            bleReconnectTimer = setTimeout(tryReconnect, 5000);
        }
    }
}

async function disconnectBLE() {
    bleAutoReconnect = false;
    if (bleReconnectTimer) { clearTimeout(bleReconnectTimer); bleReconnectTimer = null; }
    try {
        if (bleServer && bleServer.connected) await bleServer.disconnect();
    } catch (e) {}
    bleConnected = false;
    bleDevice = null;
    bleServer = null;
    document.getElementById("btn-ble-connect").textContent = "🔗 BLE";
    document.getElementById("btn-ble-connect").classList.remove("active");
    updateBLEStatus("");
}

// BLE button always visible — if browser lacks Web Bluetooth, clicking will show a helpful message
