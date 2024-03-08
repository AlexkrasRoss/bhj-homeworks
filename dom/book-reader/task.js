let books = Array.from(document.querySelectorAll(".font-size"));
let clBook = document.querySelector(".book");

books.forEach(item => {
	item.addEventListener("click", book)
})

function book() {
	books.forEach(element => {
		element.classList.remove('font-size_active');
		if (this.dataset.size === 'small') {
			clBook.classList.add('font-size_small')
		} else {
			clBook.classList.remove('font-size_small')
		}
		if (this.dataset.size === 'big') {
			clBook.classList.add('font-size_big')
		} else {
			clBook.classList.remove('font-size_big')
		}
	})
	this.classList.add('font-size_active');
}