const CACHE_VERSION = "v2";
// const PRECACHE_ASSETS = ["/", "/style.css", "/index.html", "/app.js", '/img.jpg'];
// const PRECACHE_ASSETS = ["/", "/style.css", "/index.html", "/app.js"];


self.oninstall = event => {
  console.log("Install event, start precaching...");
  // event.waitUntil(
  //   caches.open(CACHE_VERSION).then(cache => {
  //     return cache.addAll(PRECACHE_ASSETS);
  //   })
  // );
};
