function getUrlParam(paramName) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(paramName);
}

function redirect(url) {
    window.location.replace(url);
}

var redirecturl;

/* Get redirect id */
const ProjectID = getUrlParam('id') || "noid";

/* Get elements */
const RedirectElm = document.getElementById("ProjectName");

switch (ProjectID) {
    case "osd":
        RedirectElm.innerText = "Redirecting to OS-Detect";
        redirecturl = "https://github.com/oxmc/os-detect.js";
        break;

    case "crdlst":
        RedirectElm.innerText = "Redirecting to Cardlist";
        redirecturl = "https://github.com/oxmc/cardlist";
        break;

    case "ppdb":
        RedirectElm.innerText = "Redirecting to Paypal Donate Button";
        redirecturl = "https://github.com/oxmc/paypaldonatebutton";
        break;

    default:
    case "noid":
        redirecturl = "https://oxmc.is-a.dev/?ref=invalid_proj_redirect";
        break;
}

/* Wait then redirect */
setTimeout(() => {
    try {
      redirect(redirecturl);
    } catch (error) {
        alert("Unable to redirect to:", redirecturl);
    }
}, 2000);