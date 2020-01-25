var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn-random");

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
}

function generateRandomCalors() {
	var digits = '0123456789ABCDEF';
	var color = '#';
	const hexLength = 6;
	for (var i = 0; i < hexLength; i++) {
		color += digits[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomColours() {
	color1.value = generateRandomCalors();
	color2.value = generateRandomCalors();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomColours);
body.addEventListener("load", setGradient());
