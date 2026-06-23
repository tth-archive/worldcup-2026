const C="wc2026-v10";
const A=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET")return;
  e.respondWith(
    fetch(req).then(res=>{
      if(res&&res.ok&&new URL(req.url).origin===location.origin){const cp=res.clone();caches.open(C).then(c=>c.put(req,cp));}
      return res;
    }).catch(()=>caches.match(req).then(r=>r||caches.match("./index.html")))
  );
});
