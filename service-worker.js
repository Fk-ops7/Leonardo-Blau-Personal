self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("leo-site-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.webmanifest",
        "./icone.png",
        "./icone-192.png",
        "./icone-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


