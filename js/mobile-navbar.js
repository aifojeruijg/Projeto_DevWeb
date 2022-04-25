const menumobile = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-menu");

menumobile.addEventListener("click", () => {
    menumobile.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll (".nav-link").forEach(n => n. 
addEventListener("click", () => {
    menumobile.classList.remove("active");
    navMenu.classList.remove("active");
}))