// Temprature Monitor — Service Worker
const CACHE_NAME = 'temprature-v1';
const ASSETS = [
    '/',
    '/static/css/style.css',
    '/static/js/dashboard.js',
    '/static/js/ble_receiver.js',
    '/static/manifest.json',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
        ))
    );
});

self.addEventListener('fetch', event => {
    // API calls: network first
    if (event.request.url.includes('/api/') || event.request.url.includes('/ws')) {
        return;
    }
    // Static assets: cache first
    event.respondWith(
        caches.match(event.request).then(resp => resp || fetch(event.request))
    );
});
