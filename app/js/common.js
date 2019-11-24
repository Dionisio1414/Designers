document.addEventListener('DOMContentLoaded', () => {
	let headerInformationHeight = document.querySelector('.header__information').offsetHeight,
		headerBottomMenu = document.querySelector('.header__bottom');
	
	
	const homeSlider = tns({
		container: document.querySelector(".home-slider"),
		items: 1,
		loop: false,
		speed: 400,
		"mouseDrag": true,
		controls: false
	});
	
	window.addEventListener("scroll", () => {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if(scrollTop > headerInformationHeight) headerBottomMenu.classList.add('fixed')
		else headerBottomMenu.classList.remove('fixed');
	});
});