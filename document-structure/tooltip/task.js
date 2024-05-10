let hasTooltip = document.querySelector('.has-tooltip');
let tooltip = `<div class="tooltip" style="left: 0; top: 0">
   Проверка!
    </div>`
hasTooltip.insertAdjacentHTML('afterend', tooltip);


window.addEventListener("click", e => {
	e.preventDefault();
	let target = e.target;
	let ltip = document.querySelector('.tooltip');
	if (target.classList.contains('has-tooltip')) {
		if (target.title === ltip.textContent) {
			ltip.classList.toggle('tooltip_active');
			ltip.textContent = target.title;
		} else {
			ltip.classList.add('tooltip_active');
			ltip.textContent = target.title;

			const left = target.offsetLeft;
			const top = target.offsetTop;
			const height = target.offsetHeight;

			ltip.style.position = 'absolute';
			ltip.style.left = left + 'px';
			ltip.style.top = (top + height + 2) + 'px';
			if (ltip.offsetLeft < 0) {
				ltip.style.left = 2 + 'px'
			}
		}
	}
});