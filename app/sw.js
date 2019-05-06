const CACHE_NAME = 'company_PWA_0001';
const FILESTOCACHE = [
    './styles/css/bootstrap/bootstrap.min.css',
    './styles/css/fontawesome-free/css/all.css',
    './styles/main.css',
    './content/images/random-logo.png',
    './pages/home/home.view.html',
    './pages/offline/index.html'
]

this.addEventListener('install', event => {
    // this.skipWaiting()

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache')
            return cache.addAll(FILESTOCACHE)
        })
    )
})

this.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                .filter(cacheName => (cacheName.startsWith('Project')))
                .filter(cacheName => (cacheName !== staticCacheName))
                .map(cacheName => {
                    return caches.delete(cacheName)
                })
            )
        })
    )
})

this.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request)
        })
        .catch(error => {
            return caches.match('/home')
        })
    )
})