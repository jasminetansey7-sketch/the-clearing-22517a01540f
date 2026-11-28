// The Clearing — service worker, v2.3.32: document is network-first (updates land on the first open after a push); assets stay stale-while-revalidate.
// Cache name MUST change with every app version.
const CACHE = "clearing-v2.3.57";
const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "maplibre/maplibre-gl.js",
  "maplibre/maplibre-gl.css",
  "tiles/12/639/1403.png",
  "tiles/12/639/1404.png",
  "tiles/13/1278/2807.png",
  "tiles/13/1278/2808.png",
  "tiles/13/1279/2807.png",
  "tiles/13/1279/2808.png",
  "tiles/14/2556/5614.png",
  "tiles/14/2556/5615.png",
  "tiles/14/2556/5616.png",
  "tiles/14/2557/5614.png",
  "tiles/14/2557/5615.png",
  "tiles/14/2557/5616.png",
  "tiles/14/2558/5614.png",
  "tiles/14/2558/5615.png",
  "tiles/14/2558/5616.png",
  "tiles/15/5112/11228.png",
  "tiles/15/5112/11229.png",
  "tiles/15/5112/11230.png",
  "tiles/15/5112/11231.png",
  "tiles/15/5112/11232.png",
  "tiles/15/5112/11233.png",
  "tiles/15/5113/11228.png",
  "tiles/15/5113/11229.png",
  "tiles/15/5113/11230.png",
  "tiles/15/5113/11231.png",
  "tiles/15/5113/11232.png",
  "tiles/15/5113/11233.png",
  "tiles/15/5114/11228.png",
  "tiles/15/5114/11229.png",
  "tiles/15/5114/11230.png",
  "tiles/15/5114/11231.png",
  "tiles/15/5114/11232.png",
  "tiles/15/5114/11233.png",
  "tiles/15/5115/11228.png",
  "tiles/15/5115/11229.png",
  "tiles/15/5115/11230.png",
  "tiles/15/5115/11231.png",
  "tiles/15/5115/11232.png",
  "tiles/15/5115/11233.png",
  "tiles/15/5116/11228.png",
  "tiles/15/5116/11229.png",
  "tiles/15/5116/11230.png",
  "tiles/15/5116/11231.png",
  "tiles/15/5116/11232.png",
  "tiles/15/5116/11233.png",
  "tiles/16/10224/22456.png",
  "tiles/16/10224/22457.png",
  "tiles/16/10224/22458.png",
  "tiles/16/10224/22459.png",
  "tiles/16/10224/22460.png",
  "tiles/16/10224/22461.png",
  "tiles/16/10224/22462.png",
  "tiles/16/10224/22463.png",
  "tiles/16/10224/22464.png",
  "tiles/16/10224/22465.png",
  "tiles/16/10224/22466.png",
  "tiles/16/10225/22456.png",
  "tiles/16/10225/22457.png",
  "tiles/16/10225/22458.png",
  "tiles/16/10225/22459.png",
  "tiles/16/10225/22460.png",
  "tiles/16/10225/22461.png",
  "tiles/16/10225/22462.png",
  "tiles/16/10225/22463.png",
  "tiles/16/10225/22464.png",
  "tiles/16/10225/22465.png",
  "tiles/16/10225/22466.png",
  "tiles/16/10226/22456.png",
  "tiles/16/10226/22457.png",
  "tiles/16/10226/22458.png",
  "tiles/16/10226/22459.png",
  "tiles/16/10226/22460.png",
  "tiles/16/10226/22461.png",
  "tiles/16/10226/22462.png",
  "tiles/16/10226/22463.png",
  "tiles/16/10226/22464.png",
  "tiles/16/10226/22465.png",
  "tiles/16/10226/22466.png",
  "tiles/16/10227/22456.png",
  "tiles/16/10227/22457.png",
  "tiles/16/10227/22458.png",
  "tiles/16/10227/22459.png",
  "tiles/16/10227/22460.png",
  "tiles/16/10227/22461.png",
  "tiles/16/10227/22462.png",
  "tiles/16/10227/22463.png",
  "tiles/16/10227/22464.png",
  "tiles/16/10227/22465.png",
  "tiles/16/10227/22466.png",
  "tiles/16/10228/22456.png",
  "tiles/16/10228/22457.png",
  "tiles/16/10228/22458.png",
  "tiles/16/10228/22459.png",
  "tiles/16/10228/22460.png",
  "tiles/16/10228/22461.png",
  "tiles/16/10228/22462.png",
  "tiles/16/10228/22463.png",
  "tiles/16/10228/22464.png",
  "tiles/16/10228/22465.png",
  "tiles/16/10228/22466.png",
  "tiles/16/10229/22456.png",
  "tiles/16/10229/22457.png",
  "tiles/16/10229/22458.png",
  "tiles/16/10229/22459.png",
  "tiles/16/10229/22460.png",
  "tiles/16/10229/22461.png",
  "tiles/16/10229/22462.png",
  "tiles/16/10229/22463.png",
  "tiles/16/10229/22464.png",
  "tiles/16/10229/22465.png",
  "tiles/16/10229/22466.png",
  "tiles/16/10230/22456.png",
  "tiles/16/10230/22457.png",
  "tiles/16/10230/22458.png",
  "tiles/16/10230/22459.png",
  "tiles/16/10230/22460.png",
  "tiles/16/10230/22461.png",
  "tiles/16/10230/22462.png",
  "tiles/16/10230/22463.png",
  "tiles/16/10230/22464.png",
  "tiles/16/10230/22465.png",
  "tiles/16/10230/22466.png",
  "tiles/16/10231/22456.png",
  "tiles/16/10231/22457.png",
  "tiles/16/10231/22458.png",
  "tiles/16/10231/22459.png",
  "tiles/16/10231/22460.png",
  "tiles/16/10231/22461.png",
  "tiles/16/10231/22462.png",
  "tiles/16/10231/22463.png",
  "tiles/16/10231/22464.png",
  "tiles/16/10231/22465.png",
  "tiles/16/10231/22466.png",
  "tiles/16/10232/22456.png",
  "tiles/16/10232/22457.png",
  "tiles/16/10232/22458.png",
  "tiles/16/10232/22459.png",
  "tiles/16/10232/22460.png",
  "tiles/16/10232/22461.png",
  "tiles/16/10232/22462.png",
  "tiles/16/10232/22463.png",
  "tiles/16/10232/22464.png",
  "tiles/16/10232/22465.png",
  "tiles/16/10232/22466.png",
  "tiles/16/10233/22456.png",
  "tiles/16/10233/22457.png",
  "tiles/16/10233/22458.png",
  "tiles/16/10233/22459.png",
  "tiles/16/10233/22460.png",
  "tiles/16/10233/22461.png",
  "tiles/16/10233/22462.png",
  "tiles/16/10233/22463.png",
  "tiles/16/10233/22464.png",
  "tiles/16/10233/22465.png",
  "tiles/16/10233/22466.png",
  "fonts/Noto Sans Regular/0-255.pbf",
  "fonts/Noto Sans Regular/256-511.pbf"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Only same-origin requests go through the cache. The bridge and
  // Open-Meteo are cross-origin, so they always use the network and
  // the app's own offline handling covers failures.
  if (url.origin !== self.location.origin) return;
  const isDocument = e.request.mode === "navigate"
    || url.pathname.endsWith("/") || url.pathname.endsWith("/index.html");
  if (isDocument) {
    // v2.3.29: network-first for the document — a pushed update shows
    // on the FIRST open after the push, not the second. Offline, the
    // cached copy is served instead.
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const network = fetch(e.request)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => cached);
      // Stale-while-revalidate: show the cached asset at once, refresh behind it.
      return cached || network;
    })
  );
});
