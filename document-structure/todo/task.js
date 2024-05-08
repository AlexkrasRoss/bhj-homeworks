
let input = document.querySelector("#task__input");
let btn = document.querySelector("#tasks__add");
let result = document.querySelector("#tasks__list");

function todoListFiled() {
	let divTag = `<div class="task">
                      <div class="task__title">
                        ${input.value}
                      </div>
                      <a href="#" class="task__remove">&times;</a>
                    </div>`
	result.insertAdjacentHTML('beforeend', divTag);
};

btn.addEventListener("click", e => {
	e.preventDefault();
	if (input.value.trim().length === 0) {
		return
	} else {
		todoListFiled();
		input.value = null;
	};
});

result.addEventListener("click", e => {
	e.preventDefault();
	if (e.target.classList.contains('task__remove')) {
		const card = e.target.closest(".task");
		card.remove();
	};
});