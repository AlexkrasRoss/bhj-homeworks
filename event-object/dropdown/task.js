const dropdownValue = document.querySelector('.dropdown__value'),
	dropdownItem = (document.querySelectorAll('.dropdown__item'));

dropdownValue.addEventListener('click', dropdownList);

function dropdownList() {
	document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
}

dropdownItem.forEach((element, index) => {
	element.onclick = (event) => {
		dropdownList();
		dropdownValue.textContent = dropdownItem[index].textContent;
		event.preventDefault();
	}
})