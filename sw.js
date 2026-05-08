const CACHE_NAME = 'feud-emcee-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './soundEffects/ding.mp3',
  './soundEffects/roundWin.mp3',
  './soundEffects/strike.mp3',
  './soundEffects/theme.mp3'
];

// Install: Cache all files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch: Serve from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
