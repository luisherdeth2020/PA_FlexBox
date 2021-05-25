const idHamburger = document.getElementById('hamburger');
const headerNav = document.getElementById('header__nav');

idHamburger.addEventListener('click', () => {
	idHamburger.classList.toggle('active');
	headerNav.classList.toggle('show');
});
