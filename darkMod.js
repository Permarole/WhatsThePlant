function toggleDarkMode() {
	let buttons = document.querySelectorAll(".game__answers__item__text");
	for (let button of buttons) {
		button.classList.toggle("darkModeButton");
	}
	let element = document.body;
	element.classList.toggle("darkMode");
}
