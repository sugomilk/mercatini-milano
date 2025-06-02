
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('mercatini-cache').then(function(cache) {
      return cache.addAll([
        './milano-mercatini.html',
        './manifest.json',
        './icon.png',
        'https://unpkg.com/leaflet/dist/leaflet.css',
        'https://unpkg.com/leaflet/dist/leaflet.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
