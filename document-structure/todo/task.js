const input = document.querySelector("#task__input");
const btn = document.querySelector("#tasks__add");
let result = document.querySelector("#tasks__list");
const body = document.querySelector('main')

btn.addEventListener("click", (e) => {
	e.preventDefault();
	createElements(input.value)
	input.value = ''
})

function createElements(value) {
	if (input.value === '') return
	let divTask = document.createElement('div');
	let divTaskA = document.createElement('a');
	divTask.classList.add('task');
	divTaskA.setAttribute('href', '#');
	divTask.classList.add('task__title');
	divTaskA.classList.add('task__remove', );

	result.appendChild(divTask);
	result.appendChild(divTaskA);

	divTask.textContent = value
	divTask.appendChild(divTaskA);
	divTaskA.innerHTML = '&times;';

	divTaskA.addEventListener("click", (e) => {
		e.preventDefault();
		divTask.remove();
	});
};
