let texTarea = document.querySelector('#editor');
let btn = document.querySelector('.btn');

// сохраняем текст в  localStorage
texTarea.addEventListener('keydown', function(e) {
	localStorage.setItem('text', texTarea.value);
});

// получаем текст из  localStorage и выводим в текстовое поле
texTarea.innerText = localStorage.getItem('text');

// очищаем текстовое поле и localStorage
btn.addEventListener("click", function(e) {
	e.preventDefault();
	localStorage.removeItem('text');
	texTarea.value = '';
});