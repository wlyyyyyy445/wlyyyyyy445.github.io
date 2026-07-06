// Web Bluetooth BLE Receiver — 浏览器直接接收ESP32 BLE数据
// 使用 Web Bluetooth API (Chrome/Edge/Opera 支持)

const NUS_SERVICE = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
const NUS_TX = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";  // Notify
const NUS_RX = "6e400002-b5a3-f393-e0a9-e50e24dcca9e";  // Write

let bleDevice = null;
let bleServer = null;
let bleConnected = false;

function parseBLEData(value) {
    const text = new TextDecoder().decode(value);
    if (!text.startsWith("DATA,")) return null;
    const parts = text.split(",");
    if (parts.length < 10) return null;
    return {
        esp_ms: parseInt(parts[1]) || 0,
        temp_ok: parseInt(parts[2]) || 0,
        temp_c: parts[3] !== "nan" ? parseFloat(parts[3]) : null,
        cur_raw: parseInt(parts[4]) || 0,
        cur_pin_v: parseFloat(parts[5]),
        cur_ua: parseFloat(parts[6]),
        divider_bat_v: parseFloat(parts[7]),
        volt_raw: parseInt(parts[8]) || 0,
        volt_pin_v: parseFloat(parts[9]),
        voltage_v: parts.length > 10 ? parseFloat(parts[10]) : parseFloat(parts[9]),
        source: "web_ble",
    };
}

async function postToServer(data) {
    try {
        await fetch("/api/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    } catch (e) {}
}

async function connectBLE() {
    if (!navigator.bluetooth) {
        alert("此浏览器不支持 Web Bluetooth。请使用 Chrome/Edge。");
        return;
    }
    try {
        bleDevice = await navigator.bluetooth.requestDevice({
            filters: [{ services: [NUS_SERVICE] }],
            optionalServices: [NUS_SERVICE],
        });
        bleServer = await bleDevice.gatt.connect();
        const service = await bleServer.getPrimaryService(NUS_SERVICE);
        const txChar = await service.getCharacteristic(NUS_TX);

        await txChar.startNotifications();
        txChar.addEventListener("characteristicvaluechanged", (event) => {
            const data = parseBLEData(event.target.value);
            if (data) postToServer(data);
        });

        bleConnected = true;
        updateBLEStatus(true);
        bleDevice.addEventListener("gattserverdisconnected", () => {
            bleConnected = false;
            updateBLEStatus(false);
        });
    } catch (e) {
        console.error("BLE error:", e);
        updateBLEStatus(false);
    }
}

function updateBLEStatus(connected) {
    const el = document.getElementById("ble-status");
    const btn = document.getElementById("btn-ble-connect");
    if (!el) return;
    if (connected) {
        el.textContent = "🔵 BLE 已连接";
        el.style.color = "var(--success)";
        if (btn) btn.textContent = "断开BLE";
    } else {
        el.textContent = "BLE 未连接";
        el.style.color = "var(--text-muted)";
        if (btn) btn.textContent = "🔗 连接BLE";
    }
}

async function toggleBLE() {
    if (bleConnected) {
        if (bleDevice && bleDevice.gatt) bleDevice.gatt.disconnect();
        bleConnected = false;
        updateBLEStatus(false);
    } else {
        await connectBLE();
    }
}
