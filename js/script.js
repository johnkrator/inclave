const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");
// const authOptions = document.querySelector(".authentication-options");

navbarToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    // authOptions.classList.toggle("active-auth");
});