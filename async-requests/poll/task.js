const reURL = 'https://students.netoservices.ru/nestjs-backend/poll'
const xhr = new XMLHttpRequest();

// // Асинхронный метод
xhr.open('GET', reURL);
xhr.responseType = 'json';
let answer = xhr.response;
xhr.onload = () => {
	if (xhr.status >= 400) {
		console.error(xhr.response)
	} else {
		let pTitle = document.querySelector(".poll__title");
		let title = `${xhr.response.data.title}`
		pTitle.insertAdjacentHTML('beforeend', title);

		let pollAnsers = xhr.response.data.answers
		pollAnsers.forEach((item, index) => {
			let answer = document.querySelector("#poll__answers");
			let code = `<button class="poll__answer">
${pollAnsers[index]}
</button>`
			answer.insertAdjacentHTML('beforeend', code);
		})
	}
	// КНОПКА
	let btn = document.querySelectorAll('button');
	btn.forEach(item => {
		item.addEventListener("click", e => {
			if (item) {
				alert('Спасибо, ваш голос засчитан!')
				location.reload(true)
			}
		})
	})
}
xhr.send();