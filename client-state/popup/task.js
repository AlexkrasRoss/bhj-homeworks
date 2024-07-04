const modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');

if (document.cookie.includes('popup') === true) {
	modal.classList.remove('modal_active')
} else {
	modal.classList.add('modal_active')
}

modalClose.addEventListener('click', function() {
	document.cookie = "popup=popupClosed; path=/; ";
	modal.classList.remove('modal_active')
})