let hasTooltip = document.querySelectorAll('.has-tooltip')

hasTooltip.forEach(item => {
	let div = document.createElement('div')
	div.classList.add('tooltip')
	item.appendChild(div);
	div.textContent = item.title
	const left = item.offsetLeft;
	const top = item.offsetTop;
	const height = item.offsetHeight;
	

	item.addEventListener("click", (e) => {
		e.preventDefault();
		div.classList.toggle('tooltip_active')
		div.style.position = 'absolute';
		div.style.left = left + (item.offsetWidth - div.offsetWidth)/2 + 'px';
		div.style.top = (top + height + 2) + 'px';
        if(left < 0) left = 0;

	})

})