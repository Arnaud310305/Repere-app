/* REPÈRE : cache du code uniquement. Les données privées restent sur l'appareil. */
const CACHE = 'repere-shell-v1';
const SHELL = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL.map(path => new URL(path, self.registration.scope).href))));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('repere-shell-') && key !== CACHE).map(key => caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(req);
      if (response.ok) cache.put(req, response.clone());
      return response;
    } catch {
      return (await cache.match(req, {ignoreSearch:true})) ||
        (req.mode === 'navigate' ? await cache.match(new URL('./index.html', self.registration.scope).href) : undefined) ||
        Response.error();
    }
  })());
});
