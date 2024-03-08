let revealsArr = Array.from(document.querySelectorAll('.reveal'));
document.addEventListener('scroll', function() {
	revealsArr.forEach(item => {
		const {
			top,
			bottom
		} = item.getBoundingClientRect();
		if ((top > 0) && (bottom < window.innerHeight)) {
			item.classList.add('reveal_active');
		}else{
			item.classList.remove('reveal_active');
		  }
	})
});