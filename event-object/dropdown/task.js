const dropdownValue = document.querySelector('.dropdown__value'),
	dropdownItem = (document.querySelectorAll('.dropdown__item'));

dropdownValue.addEventListener('click', myFunction);

function myFunction() {
	document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
}

dropdownItem.forEach((element, index) => {
	element.onclick = (event) => {
		myFunction();
		dropdownValue.textContent = dropdownItem[index].textContent;
		event.preventDefault();
	}
})