/* Variables */
let durration = Date.now() + 4 * 1000;
const school_colors = ["#000080", "#ADD8E6"];
const count = 200;
const defaults = {
    origin: { y: 0.7 },
};

var birthdays = [
    {
        "name": "Savannah",
        "img": "https://www.svgrepo.com/show/106408/birthday-cake.svg",
        "id": "bday_1",
        "desc": "Birthday 10/29"
    },
    {
        "name": "Tye",
        "img": "https://www.svgrepo.com/show/106408/birthday-cake.svg",
        "id": "bday_2",
        "desc": "Birthday 10/24"
    },
    {
        "name": "Matthew",
        "img": "https://www.svgrepo.com/show/106408/birthday-cake.svg",
        "id": "bday_3",
        "desc": "Birthday 10/25"
    }
];

/* Elements */
const cardContainer = document.getElementById("bdaycards");
const spinner = document.getElementById("spinner");
const statusText = document.getElementById("statusText");
const messageHeader = document.getElementById("messageHeader");
const message = document.getElementById("message");
const cake = document.querySelector("div.cake");

/* Functions */
function runAtSpecificTime(targetHour, targetMinute, callback) {
    const now = new Date();
    const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHour, targetMinute, 0);
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
        // The target time has already passed, so execute the callback immediately.
        callback();
    } else {
        // Schedule the callback to run after the time difference has elapsed.
        setTimeout(callback, timeDifference);
    }
}

function fire(particleRatio, opts) {
    confetti(
        Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
        })
    );
}

function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: school_colors,
    });

    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: school_colors,
    });

    if (Date.now() < durration) {
        requestAnimationFrame(frame);
    }
}

async function createBirthdayCards() {
    const lastCardIndex = birthdays.length - 1;

    for (let i = 0; i < birthdays.length; i++) {
        const card = birthdays[i];

        const div = document.createElement("div");
        div.innerHTML = `
        <a id="${card.id}" class="card">
          <div class="thumb" style="background-image: url(${card.img});"></div>
          <article>
            <h1>${card.name}</h1>
            <span>${card.desc}</span>
          </article>
        </a>`;
        cardContainer.appendChild(div);

        // Wait for 2 seconds, except for the last card
        if (i < lastCardIndex) {
            await new Promise(resolve => setTimeout(resolve, 2000));
        } else {
            // Run celebrate function after the last card
            celebrate();
        }
    }
}

function celebrate() {
    messageHeader.innerHTML = "Happy birthday!";
    setTimeout(() => {
        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        fire(0.2, {
            spread: 60,
        });

        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }, 4000);
}

/* Main */
function birthday() {
    statusText.innerHTML = "Remember to have a good weekend!";
    spinner.classList = [];
    spinner.style.fontSize = "3.5em";
    spinner.innerHTML = "<span class='wave'>👋</span>";
    setTimeout(() => {
        messageHeader.innerHTML = "";
        message.innerHTML = "";
        document.querySelector(".loader").className += " hidden";
        setTimeout(() => {
            messageHeader.innerHTML = ".";
            setTimeout(() => {
                messageHeader.innerHTML = "..";
                setTimeout(() => {
                    messageHeader.innerHTML = "...";
                    setTimeout(() => {
                        messageHeader.innerHTML = "You know what time it is?";
                        setTimeout(() => {
                            message.innerHTML = "It's ....";
                            setTimeout(() => {
                                message.innerHTML = "";
                                messageHeader.innerHTML = "BIRTHDAY TIME!";
                                cake.style.display = "block";
                            }, 2000);
                            setTimeout(() => {
                                durration = Date.now() + 4 * 1000;
                                frame();
                                setTimeout(() => {
                                    fire(0.25, {
                                        spread: 26,
                                        startVelocity: 55,
                                    });

                                    fire(0.2, {
                                        spread: 60,
                                    });

                                    fire(0.35, {
                                        spread: 100,
                                        decay: 0.91,
                                        scalar: 0.8,
                                    });

                                    fire(0.1, {
                                        spread: 120,
                                        startVelocity: 25,
                                        decay: 0.92,
                                        scalar: 1.2,
                                    });

                                    fire(0.1, {
                                        spread: 120,
                                        startVelocity: 45,
                                    });
                                    setTimeout(() => {
                                        cake.style.animation = "fadeOut 1s";
                                        cake.style.animationFillMode = "forwards";
                                        setTimeout(() => {
                                            cake.style.display = "none";
                                            messageHeader.innerHTML = "Let's list the birthdays!";
                                            setTimeout(() => {
                                                createBirthdayCards();
                                            }, 2000);
                                        }, 1000);
                                    }, 2000);
                                }, 4000);
                            }, 3000);
                        }, 2000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 5000);
};

runAtSpecificTime(14, 46, () => {
    console.log("The time has come!");
    birthday();
});