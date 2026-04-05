document.addEventListener("DOMContentLoaded", function () {
	const shortDescription = document.getElementById("short-description");
	const longDescription = document.getElementById("long-description");
	const expandButton = document.querySelector(".about-us-expand");

	if (!shortDescription || !longDescription || !expandButton) return;

	let expanded = false;

	expandButton.addEventListener("click", function () {
		if (window.innerWidth <= 736) {
			expanded = !expanded;
			expandButton.setAttribute("aria-expanded", String(expanded));

			if (expanded) {
				shortDescription.hidden = true;
				longDescription.hidden = false;
				longDescription.style.display = "block";
				expandButton.textContent = "Show Less";
				longDescription.scrollIntoView({ behavior: "smooth", block: "start" });
			} else {
				shortDescription.hidden = false;
				longDescription.hidden = true;
				longDescription.style.display = "none";
				expandButton.textContent = "Learn More";
			}
		}
	});
});