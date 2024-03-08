const AllClasses = document.querySelectorAll(".rotator__case");
let count = 1;

function carousel() {
	AllClasses.forEach((element, index) => {
		element.classList.toggle("rotator__case_active", count === index);
	});
	count++;
	if (count >= AllClasses.length) {
		count = 0;
	}
}
setInterval(carousel, 1000);