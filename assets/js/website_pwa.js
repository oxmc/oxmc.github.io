if ('serviceWorker' in navigator && 'PushManager' in window) {
    // Check if service workers and Push API are supported in the browser
    navigator.serviceWorker.register('https://oxmc.is-a.dev/assets/js/install_sw.js')
        .then(function (registration) {
            // Service worker registration successful
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function (error) {
            // Service worker registration failed
            console.error('Service Worker registration failed:', error);
        });
}

let firstTime;
firstTime = true;
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default installation prompt
    event.preventDefault();

    if (firstTime === true) {
        iziToast.question({
            timeout: 10000,
            close: false,
            overlay: true,
            displayMode: 'once',
            layout: 2,
            id: 'pwa-question',
            title: 'Install site as PWA',
            message: 'Would you like to install my site as a PWA?',
            position: 'center',
            buttons: [
                ['<button style="float: right !important;"><b>YES</b></button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                    firstTime = false;
                    event.prompt();
                }, true],
                ['<button style="float: right !important;">NO</button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                }],
            ]
        });
    }
});