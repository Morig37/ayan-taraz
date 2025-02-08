import { precacheAndRoute, registerRoute } from 'workbox-precaching';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Precache all assets specified in __WB_MANIFEST
precacheAndRoute(self.__WB_MANIFEST);

// Caching strategy for static resources (styles, scripts, workers)
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
    plugins: [
      // You can add plugins like expiration and cacheable responses here
    ]
  })
);
