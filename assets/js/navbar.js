document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.querySelector(".menu-toggle");
	const navOverlay = document.querySelector(".nav-overlay");
	const siteNav = document.getElementById("site-nav");
	const navLinks = document.querySelectorAll(".nav-a");

	function openMenu() {
		navOverlay.classList.add("open");
		menuToggle.setAttribute("aria-expanded", "true");
		menuToggle.setAttribute("aria-label", "Close menu");

		const firstLink = siteNav.querySelector("a");
		if (firstLink) firstLink.focus();
	}

	function closeMenu(returnFocus = true) {
		navOverlay.classList.remove("open");
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "Open menu");

		if (returnFocus) {
			menuToggle.focus();
		}
	}

	menuToggle.addEventListener("click", function (e) {
		e.stopPropagation();

		if (navOverlay.classList.contains("open")) {
			closeMenu();
		} else {
			openMenu();
		}
	});

	siteNav.addEventListener("click", function (e) {
		e.stopPropagation();
	});

	navOverlay.addEventListener("click", function () {
		closeMenu(false);
	});

	navLinks.forEach(link => {
		link.addEventListener("click", function () {
			closeMenu(false);
		});
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && navOverlay.classList.contains("open")) {
			closeMenu();
		}
	});
});


/*
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





document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.querySelector(".menu-toggle");
	const navOverlay = document.querySelector(".nav-overlay");
	const siteNav = document.getElementById("site-nav");
	const navLinks = document.querySelectorAll(".nav-a");

	function openMenu() {
		navOverlay.classList.add("active");
		menuToggle.setAttribute("aria-expanded", "true");

		const firstLink = siteNav.querySelector("a");
		if (firstLink) firstLink.focus();
	}

	function closeMenu() {
		navOverlay.classList.remove("active");
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.focus();
	}

	menuToggle.addEventListener("click", function () {
		const isOpen = navOverlay.classList.contains("active");
		if (isOpen) closeMenu();
		else openMenu();
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && navOverlay.classList.contains("active")) {
			closeMenu();
		}
	});

	navLinks.forEach(link => {
		link.addEventListener("click", closeMenu);
	});
});
*/