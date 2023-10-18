import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

// Add event listener for 'install' event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-cache-name').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/icon.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
