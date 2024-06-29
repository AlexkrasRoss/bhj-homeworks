let texTarea = document.querySelector('#editor');
let btn = document.querySelector('.btn');
let formData = {};
const LS = localStorage;

window.addEventListener('keydown', function(e) {
	formData[e.target.id] = e.target.value;
	LS.setItem('formData', JSON.stringify(formData));

});
if (LS.getItem('formData')) {
	formData = JSON.parse(LS.getItem('formData'));
	texTarea.innerHTML = formData.editor;
}
btn.addEventListener("click", function(e) {
	e.preventDefault();
	localStorage.removeItem('formData')
	texTarea.value = '';
});