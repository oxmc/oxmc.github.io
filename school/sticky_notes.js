function createProjectCard(data) {
    const projectContainer = document.getElementById("stickynotes");

    data.forEach(project => {
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        div.innerHTML = `
        <a id="${project.id}" class="card" data-img-src="${project.img}">
          <div class="thumb" style="background-image: url(${project.img});"></div>
          <article>
            <h1>${project.name}</h1>
            <span>${project.desc}</span>
          </article>
        </a>`;
        if (project.large) {
            div.classList.add("large-item");
        }
        div2.innerHTML = `<div id="${project.id}-modal" class="modal">
        <span class="close" id="${project.id}-modal-close">&times;</span>
        <img class="modal-content" id="${project.id}-modal-img">
        <div id="caption"></div>
      </div>`;
        div.appendChild(div2)
        projectContainer.appendChild(div);
        setupModal(`${project.id}`, `${project.id}`, true);
    });
}

var projects = [
    {
        "name": "Purple Guy",
        "large": false,
        "img": "./img/IMG_2785.JPEG",
        "id": "sticky_note_1",
        "desc": ""
    },
    {
        "name": "Turn Back",
        "large": false,
        "img": "./img/IMG_2786.JPEG",
        "id": "sticky_note_2",
        "desc": ""
    },
    {
        "name": "Pen No Work",
        "large": false,
        "img": "./img/IMG_2787.JPEG",
        "id": "sticky_note_3",
        "desc": ""
    },
    {
        "name": "Happy Scribble",
        "large": false,
        "img": "./img/IMG_2788.JPEG",
        "id": "sticky_note_4",
        "desc": ""
    },
    {
        "name": "Yooo!",
        "large": false,
        "img": "./img/IMG_2789.JPEG",
        "id": "sticky_note_5",
        "desc": ""
    },
    {
        "name": "How Many?",
        "large": false,
        "img": "./img/IMG_2790.JPEG",
        "id": "sticky_note_6",
        "desc": ""
    },
    {
        "name": "Nothing Man",
        "large": false,
        "img": "./img/IMG_2791.JPEG",
        "id": "sticky_note_7",
        "desc": ""
    },
    {
        "name": "Where Iggy?",
        "large": false,
        "img": "./img/IMG_2838.JPEG",
        "id": "sticky_note_8",
        "desc": ""
    },
    {
        "name": "R.I.P Sticky Notes",
        "large": false,
        "img": "./img/IMG_2839.JPEG",
        "id": "sticky_note_9",
        "desc": ""
    }
];

createProjectCard(projects);