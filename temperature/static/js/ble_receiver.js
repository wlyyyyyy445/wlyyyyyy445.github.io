// Web Bluetooth BLE Receiver — 浏览器直接接收ESP32 BLE数据
// 1000Hz 批量二进制格式: [count:u8][base_ms:u32 LE][count×6B readings]
// 每条6字节: [temp_raw:i16 LE][cur_adc:u16 LE][volt_adc:u16 LE]

const NUS_SERVICE = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
const NUS_TX = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";  // Notify (ESP32 -> browser)

let bleDevice = null;
let bleServer = null;
let bleConnected = false;

// ADC calibration (same as relay)
const ADC_LSB_V = 2.2 / 4096.0;
const TMP117_LSB_C = 0.0078125;
const CURRENT_SENSE_R = 100000.0;
const DIVIDER_SCALE = 3.0;

function parseBinaryBatch(buffer) {
    // buffer is ArrayBuffer from BLE notification
    const data = new Uint8Array(buffer);
    if (data.length < 5) return [];

    const count = data[0];
    if (count === 0 || count > 30) return [];

    const baseMs = data[1] | (data[2] << 8) | (data[3] << 16) | (data[4] << 24);
    const readings = [];
    let offset = 5;

    for (let i = 0; i < count; i++) {
        if (offset + 6 > data.length) break;

        // Little-endian reads from Uint8Array
        const tempRaw = (data[offset] | (data[offset + 1] << 8)) << 16 >> 16; // i16
        const curAdc  = data[offset + 2] | (data[offset + 3] << 8);           // u16
        const voltAdc = data[offset + 4] | (data[offset + 5] << 8);           // u16
        offset += 6;

        const curPinV = curAdc * ADC_LSB_V;
        const voltPinV = voltAdc * ADC_LSB_V;

        readings.push({
            esp_ms: baseMs + i,  // samples are 1ms apart
            temp_ok: tempRaw !== 0 ? 1 : 0,
            temp_c: parseFloat((tempRaw * TMP117_LSB_C).toFixed(2)),
            cur_raw: curAdc,
            cur_pin_v: parseFloat(curPinV.toFixed(6)),
            cur_ua: parseFloat(((curPinV / CURRENT_SENSE_R) * 1000000).toFixed(3)),
            divider_bat_v: parseFloat((curPinV * DIVIDER_SCALE).toFixed(3)),
            volt_raw: voltAdc,
            volt_pin_v: parseFloat(voltPinV.toFixed(6)),
            voltage_v: parseFloat(voltPinV.toFixed(6)),
            source: "web_ble",
            client_id: getClientId(),
        });
    }
    return readings;
}

async function postBLEBatch(readings) {
    if (readings.length === 0) return;
    try {
        await fetch(getBackendUrl() + "/api/data_batch", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ readings: readings }),
        });
    } catch (e) {
        console.error("[BLE] post failed:", e);
    }
}

function handleBLENotification(event) {
    const readings = parseBinaryBatch(event.target.value.buffer);
    if (readings.length === 0) return;
    // Update dashboard with last reading
    updateCardsFromData(readings[readings.length - 1]);
    // Feed all to waveform
    updateWaveform(readings);
    // Post to backend for storage + cross-device broadcast
    postBLEBatch(readings);
}

async function toggleBLE() {
    if (bleConnected) {
        await disconnectBLE();
        return;
    }
    await connectBLE();
}

async function connectBLE() {
    const btn = document.getElementById("btn-ble-connect");
    const status = document.getElementById("ble-status");
    btn.disabled = true;
    status.textContent = "扫描中...";

    try {
        bleDevice = await navigator.bluetooth.requestDevice({
            filters: [{ services: [NUS_SERVICE] }],
            optionalServices: [NUS_SERVICE],
        });
        status.textContent = "连接中...";

        bleServer = await bleDevice.gatt.connect();
        const service = await bleServer.getPrimaryService(NUS_SERVICE);
        const txChar = await service.getCharacteristic(NUS_TX);

        await txChar.startNotifications();
        txChar.addEventListener("characteristicvaluechanged", handleBLENotification);

        bleConnected = true;
        btn.textContent = "🔗 BLE ✓";
        btn.classList.add("active");
        status.textContent = bleDevice.name || "已连接";
    } catch (e) {
        console.error("[BLE] Connect failed:", e);
        status.textContent = "连接失败";
        bleConnected = false;
    }
    btn.disabled = false;
}

async function disconnectBLE() {
    const btn = document.getElementById("btn-ble-connect");
    const status = document.getElementById("ble-status");
    try {
        if (bleServer && bleServer.connected) {
            await bleServer.disconnect();
        }
    } catch (e) {}
    bleConnected = false;
    bleDevice = null;
    bleServer = null;
    btn.textContent = "🔗 BLE";
    btn.classList.remove("active");
    status.textContent = "";
}

// Check BLE availability on load
document.addEventListener("DOMContentLoaded", function () {
    if (!navigator.bluetooth) {
        document.getElementById("btn-ble-connect").style.display = "none";
        document.getElementById("ble-status").textContent = "";
    }
});
