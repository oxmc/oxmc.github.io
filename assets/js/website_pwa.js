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
    // Prevent the default installation prompt
    event.preventDefault();

    // Store the event for later use
    window.installPromptEvent = event;

    // You can choose when and how to display the install prompt, e.g., by adding a button or automatically
    // For example, you can add a button that, when clicked, triggers the install prompt
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        event.prompt();
        event.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the installation prompt');
                }
                window.installPromptEvent = null; // Reset the event
            });
    });
});