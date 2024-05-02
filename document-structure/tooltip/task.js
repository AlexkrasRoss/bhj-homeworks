let hasTooltip = document.querySelectorAll('a.has-tooltip');
hasTooltip.forEach(item => {
	let tooltip = `<div class="tooltip" style="left: 0; top: 0">
    Проверка!
    </div>`
	item.insertAdjacentHTML('beforebegin', tooltip);
	item.addEventListener("click", e => {
		e.preventDefault();
		if (item.classList.contains('has-tooltip')) {

			let ltip = document.querySelector('.tooltip');
			ltip.classList.toggle('tooltip_active');
			ltip.textContent = item.title

			const left = item.offsetLeft;
			const top = item.offsetTop;
			const height = item.offsetHeight;

			ltip.style.position = 'absolute';
			ltip.style.left = left + 'px';
			ltip.style.top = (top + height + 2) + 'px';
			if (ltip.offsetLeft < 0) {
				ltip.style.left = 2 + 'px'
			};
		}
	})
})