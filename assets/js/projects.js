function createProjectCard(data) {
    const projectContainer = document.getElementById("projects");

    data.forEach(project => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a href="${project.link}" class="card">
          <div class="thumb" style="background-image: url(${project.img});"></div>
          <article>
            <h1>${project.name}</h1>
            <span>${project.desc}</span>
          </article>
        </a>
      `;
        if (project.large) {
            div.classList.add("large-item");
        }
        projectContainer.appendChild(div);
    });
}

var projects = [
    {
        "name": "OS-Detect.js",
        "large": false,
        "img": "./assets/img/projects/osd.png",
        "link": "./link.html?id=osd",
        "desc": "A JavaScript function to help display what OS is accessing the page."
    },
    {
        "name": "Paypal Donate Button",
        "large": false,
        "img": "./assets/img/projects/ppdb.png",
        "link": "./link.html?id=ppdb",
        "desc": "A javascript function to create custom donation buttons for pay-pal."
    },
    {
        "name": "Card List",
        "large": false,
        "img": "./assets/img/projects/crdlst.png",
        "link": "./link.html?id=crdlst",
        "desc": "A javascript function to list cards on websites."
    },
    {
        "name": "Browser Logos CSS ",
        "large": false,
        "img": "./assets/img/projects/bwrlgcss.png",
        "link": "./link.html?id=bwrlgcss",
        "desc": "A css icon library that adds webbrowser icons."
    }
];

createProjectCard(projects);