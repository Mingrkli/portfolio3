const navMenuIcon = document.querySelector("#navMenuIcon");
const navMenu = document.querySelector("nav div");
const navMenuLinks = document.querySelectorAll("nav div a");

// When user clicks the menu icon, it will show/hide the menu
navMenuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// If the user clicks the nav link it will hide the menu
navMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});
