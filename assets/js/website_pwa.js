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

window.addEventListener('beforeinstallprompt', (event) => {
    console.log("install event fired");

    // Prevent the default installation prompt
    //event.preventDefault();

    //event.prompt();

    // Store the event for later use
    //window.installPromptEvent = event;

    //window.addEventListener('inst', () => {
    //    event.prompt();
    //    event.userChoice
    //        .then((choiceResult) => {
    //            if (choiceResult.outcome === 'accepted') {
    //                console.log('User accepted the installation prompt');
    //            }
    //            window.installPromptEvent = null; // Reset the event
    //        });
    //});
});