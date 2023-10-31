// Function to check if 30 days have passed since the last execution
function hasThirtyDaysPassed(lastExecutionTimestamp) {
    if (!lastExecutionTimestamp) {
        return true; // If there's no previous timestamp, it's the first run
    }

    const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();

    return currentTime - lastExecutionTimestamp >= thirtyDaysInMilliseconds;
}

function installPWA() {
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
                ['<button><b>YES</b></button>', async function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                    firstTime = false;
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    // The deferredPrompt can only be used once.
                    deferredPrompt = null;
                    // Act on the user's choice
                    if (outcome === 'accepted') {
                        console.log('User accepted the install prompt.');
                    } else if (outcome === 'dismissed') {
                        console.log('User dismissed the install prompt');
                    }
                }, true],
                ['<button>NO</button>', function (instance, toast) {
                    firstTime = false;
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                }],
            ]
        });
    }
}

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

let deferredPrompt, firstTime;
firstTime = true;

// Initialize or retrieve the last execution timestamp from localStorage
const lastExecutionTimestamp = parseInt(localStorage.getItem('lastExecutionTimestamp'), 10);

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default installation prompt
    event.preventDefault();
    deferredPrompt = event;
    if (hasThirtyDaysPassed(lastExecutionTimestamp)) {
        installPWA();
        // Update the last execution timestamp in localStorage
        localStorage.setItem('lastExecutionTimestamp', new Date().getTime().toString());
    }
});