document.addEventListener('DOMContentLoaded', () => {
	const homeSlider = tns({
		container: document.querySelector(".home-slider"),
		items: 1,
		loop: false,
		speed: 400,
		"mouseDrag": true,
		controls: false
	})
});