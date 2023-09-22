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
        "img": "https://opengraph.githubassets.com/e347985f5ca95edc3e89e9e77c9c663dbc6ca7f7c1704d5126d475acf9e8d1f4/oxmc/OS-Detect.js",
        "link": "./project.html?id=osd",
        "desc": "A JavaScript function to help display what OS is accessing the page."
    },
    {
        "name": "Paypal Donate Button",
        "large": false,
        "img": "https://opengraph.githubassets.com/710cf871c217a2caf83607a8c8e1f5d1fcd98533282e8985be93383ec1766750/oxmc/paypaldonatebutton",
        "link": "./project.html?id=ppdb",
        "desc": "A javascript function to create custom donation buttons for pay-pal."
    },
    {
        "name": "Card List",
        "large": false,
        "img": "https://opengraph.githubassets.com/4127890892edcbaac2c86309d434cd87b807b7afef07df22ed7427f877e59129/oxmc/cardlist",
        "link": "./project.html?id=crdlst",
        "desc": "A javascript function to list cards on websites."
    }
];

createProjectCard(projects);