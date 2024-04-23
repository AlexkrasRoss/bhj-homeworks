let cartWrapper = document.querySelector('.cart__products');
// СЧЕТЧИК 
window.addEventListener("click", e => {
	const target = e.target
	if (target.classList.contains('product__quantity-control_inc') || target.classList.contains('product__quantity-control_dec')) {
		const counterWrapper = target.closest('.product__quantity-controls')
		const counter = counterWrapper.querySelector('.product__quantity-value')
		if (target.classList.contains('product__quantity-control_inc')) {
			counter.innerText = ++counter.innerText
		}
		if (target.classList.contains('product__quantity-control_dec')) {
			if (counter.innerText > 1) {
				counter.innerText = --counter.innerText
			}
		}
	}
})

// ДОБАВЛЯЕМ ТОВАР В КОРЗИНУ
window.addEventListener("click", function(event) {
	if (event.target.classList.contains('product__add')) {
		const card = event.target.closest(".product");
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product__image').getAttribute('src'),
			counter: card.querySelector('.product__quantity-value').innerText,
		}

		// ТОВАР НЕ ДУБЛИРОВАЛСЯ В КОРЗИНЕ
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('.cart__product-count');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			const cartItemHTML = `<div class="cart__product" data-id=${productInfo.id}>
                <img class="cart__product-image" src="${productInfo.imgSrc}">
                <div class="cart__product-count">${productInfo.counter}</div>
            </div>`;
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}
		card.querySelector('.product__quantity-value').innerText = '1';
	}
});