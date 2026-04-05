document.addEventListener("DOMContentLoaded", function () {
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const fadeItems = document.querySelectorAll(".fade-in-section");

	if (reducedMotion) {
		fadeItems.forEach(item => item.classList.add("is-visible"));
		return;
	}

	const observer = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				obs.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.15
	});

	fadeItems.forEach(item => observer.observe(item));
});
