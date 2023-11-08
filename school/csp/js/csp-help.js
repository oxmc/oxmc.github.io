/* Variables */
const csp = {};
csp.buttons = {};

/* Functions */
function redirect(url, external = false) {
    if (external) {
        final_url = `${url}`;
    } else {
        final_url = `./${url}`;
    };
    window.location.replace(final_url);
}

/* Get buttons */
csp.buttons.var = { elm: document.getElementById("csp-var-btn"), page: "https://studio.code.org/docs/ide/applab/expressions/declareNoAssign_x", external: true };
csp.buttons.func = { elm: document.getElementById("csp-func-btn"), page: "https://studio.code.org/docs/ide/applab/expressions/functionParams_none", external: true };
csp.buttons.cond = { elm: document.getElementById("csp-cond-btn"), page: "https://studio.code.org/docs/ide/applab/expressions/ifBlock", external: true };

/* Click listeners */
csp.buttons.var.elm.addEventListener("click", () => {
    console.log("Redirect to:", csp.buttons.var.page);
    redirect(csp.buttons.var.page, csp.buttons.var.external);
});
csp.buttons.func.elm.addEventListener("click", () => {
    console.log("Redirect to:", csp.buttons.func.page);
    redirect(csp.buttons.func.page, csp.buttons.func.external);
});
csp.buttons.cond.elm.addEventListener("click", () => {
    console.log("Redirect to:", csp.buttons.cond.page);
    redirect(csp.buttons.cond.page, csp.buttons.cond.external);
});