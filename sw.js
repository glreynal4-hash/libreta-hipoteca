// Service worker mínimo: solo lo necesario para que el navegador considere
// la app "instalable". No cachea nada de forma agresiva (así siempre ves la
// última versión que subas a GitHub) — solo deja pasar las peticiones.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
