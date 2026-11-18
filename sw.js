// PR HUB: service worker minimale, nessuna cache applicativa.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
