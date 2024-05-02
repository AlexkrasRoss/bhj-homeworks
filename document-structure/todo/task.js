
let input = document.querySelector("#task__input");
let btn = document.querySelector("#tasks__add");
let result = document.querySelector("#tasks__list");

// кнопка добавить новую задачу
btn.addEventListener("click", (e) => {
	e.preventDefault();
	createElements(input.value);
	input.value = ''.trim();
})

// поле новая задача
function createElements(value) {
	if (input.value === ''.trim()) return;
	let divTag = `<div class="task">
                      <div class="task__title">
                        ${input.value}
                      </div>
                      <a href="#" class="task__remove">&times;</a>
                    </div>`
	result.insertAdjacentHTML('beforeend', divTag);
	
// удаление поля новая задача
	window.addEventListener("click", e => {
		e.preventDefault();
		if (e.target.classList.contains('task__remove')) {
			const card = e.target.closest(".task");
			card.remove();
		};
	});
};