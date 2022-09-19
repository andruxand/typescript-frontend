importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js'
);

if (workbox) {
  workbox.precaching.precacheAndRoute([]);
  workbox.skipWaiting();
  workbox.clientsClaim();

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 80,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    /\.css$/,
    workbox.strategies.cacheFirst({
      cacheName: 'styles',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
          maxAgeSeconds: 30 * 60 // 30 min
        })
      ]
    })
  );
} else {
  console.log(`Workbox could not be loaded`);
}
