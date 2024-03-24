class Counter {
	constructor({
		selector,
		initCount = 0,
		step = 1
	}) {
		const parent = document.querySelector(selector);
		this.count = initCount;
		this.step = step;

		this.refs = {
			buttonDecrement: parent.querySelector('.product__quantity-control_dec'),
			buttonIncrement: parent.querySelector('.product__quantity-control_inc'),
			spanCount: parent.querySelector('.product__quantity-value'),
		};
		this.addListeners();
		this.updateCount();
	}
	updateCount() {
		this.refs.spanCount.textContent = this.count;
	}

	addListeners() {
		this.refs.buttonDecrement.addEventListener("click", this.onDecrement.bind(this), );
		this.refs.buttonIncrement.addEventListener("click", this.inDecrement.bind(this), );
	}
	onDecrement() {
		if (this.count < 2) return;
		this.count -= this.step;
		this.updateCount();
	}

	inDecrement() {
		this.count += this.step;
		this.updateCount();
	}
}
new Counter({
	selector: '[data-id="1"]',
	initCount: 1,
	step: 1
});
new Counter({
	selector: '[data-id="2"]',
	initCount: 1,
	step: 1
});
new Counter({
	selector: '[data-id="3"]',
	initCount: 1,
	step: 1
});
new Counter({
	selector: '[data-id="4"]',
	initCount: 1,
	step: 1
});

let cartProducts = document.querySelector('.cart__products');
let add = document.querySelector('.product__add');
let cart = document.querySelector('.cart');

// разметка добавленного в корзину товара
const elementDiv = document.createElement('div');
const elementImg = document.createElement('img');
const elementDiv2 = document.createElement('div');

elementDiv.classList.add('cart__product');
cartProducts.append(elementDiv);
elementDiv.setAttribute('data-id','1')
elementDiv.append(elementImg);
elementImg.classList.add('cart__product-image');
elementImg.setAttribute('src','image.png')
elementDiv.append(elementDiv2);
elementDiv2.classList.add('cart__product-count');
elementDiv2.textContent='20'

add.addEventListener("click",e=>{
  e.preventDefault();
  let target = e.target;
elementImg.src="https://pokushai.kz/uploads/files/640x480_f8f13b9f33dbb71ced4a24d4a9e09c89.jpg";
  })