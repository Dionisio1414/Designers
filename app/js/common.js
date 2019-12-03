document.addEventListener('DOMContentLoaded', () => {
	let headerHeight = document.querySelector('.header').offsetHeight,
		header = document.querySelector('.header'),
		searchButton = document.querySelector('.header__information-search button'),
		headerSearch = document.querySelector('.header__information-search'),
		hamburgerButton = document.querySelector('.header__bottom-navigation .hamburger'),
		popupMenu = document.querySelector('.popup-menu'),
		popupOverlay = document.querySelector('.popup-overlay'),
		popupMenuClose = document.querySelector('.popup-menu__close'),
		headerNav = document.querySelectorAll('.header__bottom-navigation ul li a'),
		popupMenuNav = document.querySelectorAll('.popup-menu__navigation nav ul li a');
	
	const homeSlider = tns({
		container: document.querySelector(".home-slider"),
		items: 1,
		loop: true,
		speed: 400,
		"mouseDrag": true,
		controls: false,
		autoplay: true,
		autoplayTimeout: 3000,
		"autoHeight": true,
		speed: 650
	});
	
	window.addEventListener("scroll", () => {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if(scrollTop > headerHeight) header.classList.add('fixed')
		else header.classList.remove('fixed');
	});
	
//	searchButton.addEventListener("click", function() {
//		if(!this.parentElement.classList.contains("show")) this.parentElement.classList.add('show');
//	});
	
//	document.addEventListener("click", (e) => {
//		if(!headerSearch.contains(e.target)) {
//			document.querySelector('.header__information-search').classList.remove('show');
//		}
//	});
	
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
	
	for(let i = 0; i < popupMenuNav.length; i++) {
		popupMenuNav[i].addEventListener("click", () => {
			hamburgerButton.classList.remove('open');
			popupMenu.style.right = `$-{50}%`;
			popupMenu.style.display = "none";
			popupOverlay.style.display = "none";
			document.querySelector('html, body').classList.remove('not--scroll');
		});
	}
	
	new SmoothScroll('.header__bottom-navigation ul li a', {
		speed: 700,
		speedAsDuration: true
	});
	
	new SmoothScroll('.popup-menu__navigation nav ul li a', {
		speed: 700,
		speedAsDuration: true
	});
});