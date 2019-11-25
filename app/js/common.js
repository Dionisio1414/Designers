document.addEventListener('DOMContentLoaded', () => {
	let headerInformationHeight = document.querySelector('.header__information').offsetHeight,
		headerBottomMenu = document.querySelector('.header__bottom'),
		searchButton = document.querySelector('.header__information-search button'),
		headerSearch = document.querySelector('.header__information-search'),
		hamburgerButton = document.querySelector('.header__bottom-navigation .hamburger'),
		popupMenu = document.querySelector('.popup-menu'),
		popupOverlay = document.querySelector('.popup-overlay'),
		popupMenuClose = document.querySelector('.popup-menu__close');
	
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
	
	searchButton.addEventListener("click", function() {
		if(!this.parentElement.classList.contains("show")) this.parentElement.classList.add('show');
	});
	
	document.addEventListener("click", (e) => {
		if(!headerSearch.contains(e.target)) {
			document.querySelector('.header__information-search').classList.remove('show');
		}
	});
	
	hamburgerButton.addEventListener("click", function(e) {
		if(!this.classList.contains('open')) {
			this.classList.add('open');
			popupMenu.style.display = "flex";
			popupMenu.style.right = 0;
			popupOverlay.style.display = "block";
			document.querySelector('html, body').classList.add('not--scroll');
		} 
	});
	
	popupMenuClose.addEventListener("click", () => {
		hamburgerButton.classList.remove('open');
		popupMenu.style.right = `$-{50}%`;
		popupMenu.style.display = "none";
		popupOverlay.style.display = "none";
		document.querySelector('html, body').classList.remove('not--scroll');
	});
	
	popupOverlay.addEventListener("click", () => {
		hamburgerButton.classList.remove('open');
		popupMenu.style.right = `$-{50}%`;
		popupMenu.style.display = "none";
		popupOverlay.style.display = "none";
		document.querySelector('html, body').classList.remove('not--scroll');
	});
	
});