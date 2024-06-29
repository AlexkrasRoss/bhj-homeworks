const form = document.getElementById('signin__form');
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const login = document.querySelector('[name="login"]');
const password = document.querySelector('[name="password"]');

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
xhr.responseType = 'json';

form.addEventListener('submit', e => {
	e.preventDefault();

	if (login.value === '' || password.value === '') {
		alert('Поле не заполнено')
		return
	}

	const formData = new FormData(form);
	xhr.onload = () => {
		const result = xhr.response;
		userId.innerHTML = result.user_id;

		if (result.success === false) {
			alert('Неверный логин/пароль')
			login.value = ''
			password.value = ''
			return
		} else {
			form.remove()
			welcome.classList.add("welcome_active");
			localStorage.setItem('login', form.login.value);
			localStorage.setItem('password', form.password.value);
		}
	}
	xhr.send(formData);
});