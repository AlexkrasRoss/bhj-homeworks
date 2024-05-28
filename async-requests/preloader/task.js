let xhr = new XMLHttpRequest();
const item = document.getElementById('items');
xhr.responseType = 'json';
xhr.onload = () => {
	if (xhr.readyState === xhr.DONE) {
		let pollAnsers = xhr.response;
		let rates = pollAnsers.response.Valute;
		Object.keys(rates).forEach(el => {
			item.innerHTML +=
				`<div class="item">
            <div class="item__code">
                ${ rates[el].CharCode}
            </div>
            <div class="item__value">
                ${ rates[el].Value}
            </div>
            <div class="item__currency">
               ${ rates[el].Name}.
            </div>`
		})
	}
	let loader = document.querySelector('.loader');
	loader.classList.remove('loader_active');
}
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();