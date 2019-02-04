/* workbox 2019-02-04T00:10:41.198Z */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.routing.registerRoute(
    /.*.(?:js|css|png|jpeg|jpg|svg|svgz|woff2)/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'assets-cache',
    })
);
workbox.precaching.precacheAndRoute([
    {
        url: '/offline/',
        revision: '1549239041198',
    }
]);
workbox.skipWaiting();
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            return response || fetch(event.request);
        })
        .catch(function() {
            return caches.match('/offline/');
        })
    );
});
self.addEventListener('install', function(event) {
    workbox.skipWaiting();
    workbox.clientsClaim();
})
