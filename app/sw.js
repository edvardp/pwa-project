const CACHE_NAME = 'company_PWA_0001';
const filesToCache = [
    '/styles/bootstrap/css/bootstrap.min.css',
    '/styles/main.css',
    '/scripts/js/jquery/jquery.min.js',
    '/scripts/js/angularjs/angular.min.js',
    '/scripts/js/bootstrap/bootstrap.min.js',
    '/scripts/js/uirouter/angular-ui-router.min.js',
    '/scripts/app.js',
    '/scripts/modules/app.controllers.module.js',
    '/scripts/modules/app.routers.module.js',
    '/scripts/routers/site.router.js',
    '/content/images/random-logo.png',
    '/pages/home/home.controller.js',
    '/pages/home/home.view.html',
    '/pages/offline/index.html'
]

this.addEventListener('install', event => {
    this.skipWaiting()

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache')
            return cache.addAll(filesToCache)
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