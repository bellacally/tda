importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2470ffbeb9461dbe8495.js",
    "revision": "8f660542da29658b388e502e6080b51e"
  },
  {
    "url": "/_nuxt/42d72b57b641b12864a4.js",
    "revision": "187b573a23c42b15253247d2940d02b4"
  },
  {
    "url": "/_nuxt/621d69c3e24d7dec1585.js",
    "revision": "48d4095e350d1bf7267aa7c553e795b3"
  },
  {
    "url": "/_nuxt/706dbbed80555e31dd11.js",
    "revision": "152f5613e33c1089f55daaf9f7fbc9d6"
  },
  {
    "url": "/_nuxt/9b89729a7831193f92f3.js",
    "revision": "c664c98a396599a1b9c4d43d2bff67e1"
  },
  {
    "url": "/_nuxt/9cd72e78df694714ad45.css",
    "revision": "17ad3237a3730dec559b2ec7abd7e34b"
  },
  {
    "url": "/_nuxt/c5d2182acd6fc47431ac.css",
    "revision": "2c30e4e6da274e81b4ccb1bf6b714cbf"
  },
  {
    "url": "/_nuxt/e682378e1e9154e43336.css",
    "revision": "cdc817cca15cca37c0cba21073f149a4"
  },
  {
    "url": "/_nuxt/fac667847fc3efd579be.js",
    "revision": "590382d1b967b4b73304a14dfa1d745e"
  }
], {
  "cacheId": "fs19",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
