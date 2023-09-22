const copyright = document.getElementById("copyright");
const currentyear = new Date().getFullYear();
if (currentyear == "2023") {
    copyrightyear = currentyear;
} else {
    copyrightyear = `2023-${currentyear}`;
};
copyright.innerHTML = `&copy; Copyright <a href="https://fissionfeline.github.io/FissionFeline/">Furious Feline</a> and oxmc ${copyrightyear}`;