const img = document.getElementById("cookie");
img.onclick = function(value) {
	document.getElementById("clicker__counter").innerHTML = (value.detail)
	if (img.width == 200) img.width = 250;
	else img.width = 200;
}