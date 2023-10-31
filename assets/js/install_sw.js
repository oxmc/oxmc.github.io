self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/css/main.css',
                '/assets/css/loading.css',
                '/assets/css/fonts.css',
                '/assets/css/contact.css',
                '/assets/css/landing.css',
                '/assets/css/cards.css',
                '/assets/css/izitoast.min.css',
                '/assets/js/nav_bar_control.js',
                '/assets/js/discord_info.js',
                '/assets/js/discord_status.js',
                '/assets/js/links.js',
                '/assets/js/loading.js',
                '/assets/js/projects.js',
                '/assets/manifest.json',
                '/assets/js/jquery-3.3.1.min.js',
                '/assets/js/izitoast.min.js',
                '/assets/js/axios.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});