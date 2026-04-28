// public/sw.js
const CACHE_NAME = 'mon-app-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Fichiers à mettre en cache immédiatement
const STATIC_ASSETS = [
  '/',
  '/offline.html', // page offline de secours
];

// Installation du service worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('Service Worker: Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  
  // Force le nouveau SW à s'activer immédiatement
  self.skipWaiting();
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          // Supprime les anciens caches
          if (cache !== STATIC_CACHE && cache !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  
  // Prend le contrôle immédiatement
  return self.clients.claim();
});

// Stratégie de fetch: Network First, fallback to Cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Ignore les requêtes non-GET
  if (request.method !== 'GET') return;
  
  // Ignore les requêtes vers des domaines externes (APIs, CDN, etc.)
  if (!request.url.startsWith(self.location.origin)) return;
  
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Clone la réponse car elle ne peut être consommée qu'une fois
        const responseClone = response.clone();
        
        // Met en cache la nouvelle réponse
        caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(request, responseClone);
        });
        
        return response;
      })
      .catch(() => {
        // Si le réseau échoue, cherche dans le cache
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Si rien dans le cache, retourne la page offline
          if (request.headers.get('accept').includes('text/html')) {
            return caches.match('/offline.html');
          }
        });
      })
  );
});