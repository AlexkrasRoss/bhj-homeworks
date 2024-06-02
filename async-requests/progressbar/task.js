const form = document.getElementById('form');
const reURL = 'https://students.netoservices.ru/nestjs-backend/upload';
const progress = document.getElementById('progress');
form.addEventListener('submit', (e) => {
	let formData = new FormData(form);
	const xhr = new XMLHttpRequest();
	xhr.open('POST', reURL);
	xhr.addEventListener('readystatechange', function() {
		if (xhr.readyState === xhr.DONE) {
			progress.value = 1;
		} else {
			progress.value = progress.value + 0.1;
		}
	})
	xhr.send(formData)
	e.preventDefault();
})