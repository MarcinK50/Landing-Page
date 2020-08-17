const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");
// Show Time
function showTime() {
	let today = new Date();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();
	// Add Zeros to Seconds
	if (sec < 10) {
		sec = `0${sec}`;
	}

	// Add Zeros to Minutes
	if (min < 10) {
		min = `0${min}`;
	}

	// Add Zeros to Houres
	if (hour < 10) {
		hour = `0${hour}`;
	}

	// Output
	time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

	setTimeout(showTime, 1_000);
}

// Set Background and Greeting
function setBgGreet() {
	let today = new Date();
	let hour = today.getHours();
	if (hour >= 6 && hour < 12) {
		// Morning
		document.body.style.backgroundImage = "url(https://marcink50.github.io/Landing-Page/img/morning.jpg)";
		greeting.textContent = "Dzie\u0144 dobry";
		document.body.style.color = "black";
	} else if (hour >= 12 && hour <= 18) {
		// Afternoon
		document.body.style.backgroundImage = "url(https://marcink50.github.io/Landing-Page/img/afternoon.jpg)";
		greeting.textContent = "Dzie\u0144 dobry";
		document.body.style.color = "black";
	} else {
		document.body.style.backgroundImage = "url(https://marcink50.github.io/Landing-Page/img/night.jpg)";
		greeting.textContent = "Dobry wiecz\xf3r";
		document.body.style.color = "white";
	}

	setInterval(setBgGreet, 3_600_000);
}

// Get Name
function getName() {
	if (localStorage.getItem("name") === null) {
		name.textContent = "[Wpisz imi\u0119]";
	} else {
		name.textContent = localStorage.getItem("name");
	}
}

// Set Name
function setName(e) {
	if (e.type === "keypress") {
		// Make sure enter is pressed
		if (e.which === 13 || e.keyCode === 13) {
			localStorage.setItem("name", e.target.innerText);
			name.blur();
		}
	} else {
		localStorage.setItem("name", e.target.innerText);
	}
}

// Get Focus
function getFocus() {
	if (localStorage.getItem("focus") === null) {
		focus.textContent = "[Wpisz tutaj]";
	} else {
		focus.textContent = localStorage.getItem("focus");
	}
}

// Set Focus
function setFocus(e) {
	if (e.type === "keypress") {
		// Make sure enter is pressed
		if (e.which === 13 || e.keyCode === 13) {
			localStorage.setItem("focus", e.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem("focus", e.target.innerText);
	}
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
