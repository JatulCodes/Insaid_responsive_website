const hamburger = document.querySelector(".hamburgur");
const navLinks = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navLinks.classList.toggle("active");
});

document.querySelectorAll(
	".navAnchor".forEach((n) =>
		n.addEventListener("click", () => {
			hamburger.classList.remove("active");
			navLinks.classList.remove("active");
		})
	)
);
