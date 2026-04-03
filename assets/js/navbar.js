const menuToggle = document.querySelector(".menu-toggle");
const navOverlay = document.querySelector(".nav-overlay");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = navOverlay.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

siteNav.addEventListener("click", (e) => {
  e.stopPropagation();
});

navOverlay.addEventListener("click", () => {
  navOverlay.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navOverlay.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});