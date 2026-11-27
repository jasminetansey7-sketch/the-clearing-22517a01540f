// The Clearing — service worker, v2.3.32: document is network-first (updates land on the first open after a push); assets stay stale-while-revalidate.
// Cache name MUST change with every app version.
const CACHE = "clearing-v2.3.41";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

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
