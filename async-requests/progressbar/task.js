const form = document.getElementById('form');
const btn = document.getElementById('send');
const fileInput = document.getElementById("file");
const progress = document.getElementById("progress");

form.addEventListener('submit', e => {
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
	xhr.upload.onprogress = (e) => {
		progress.value = Math.round(e.loaded / e.total);
	}
	xhr.addEventListener('readystatechange', function() {
		if (xhr.readyState === xhr.DONE && xhr.status === 200) {
			let file = fileInput.files[0];
			formData.get(file);
		} else {
			xhr.upload.onerror = function() {
				alert('Произошла ошибка при загрузке данных на сервер!')
			}
		}
	})
	xhr.send(formData);
	e.preventDefault();
})