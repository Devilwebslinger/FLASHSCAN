const CACHE='docsmart-true-offline-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'])).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{
  if(r.ok){const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));}
  return r;
 }).catch(()=>x)));
});
