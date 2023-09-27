window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".loader").className += " hidden";
        if ($("body").data().showwelcome == true) {
            iziToast.show({
                id: 'welcome-message',
                theme: 'dark',
                displayMode: 2,
                layout: 2,
                image: './assets/img/placeholder_pfp.png',
                imageWidth: 70,
                title: 'Welcome to my site!',
                message: `Thanks for visiting, enjoy your stay!`,
                position: 'bottomRight',
                transitionIn: 'flipInX',
                transitionOut: 'flipOutX',
                progressBarColor: 'rgb(0, 255, 184)'
            });
        }
    }, 1000);
});