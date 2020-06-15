// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
    
// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Add Zeros to Seconds
    if(sec < 10) {
        sec = '0' + sec;
    }

    // Add Zeros to Minutes
    if(min < 10) {
        min = '0' + min;
    }
    
    // Output
    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

    setTimeout(showTime, 1000);
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url(https://marcink50.github.io/Landing-Page/img/morning.jpg)";
        greeting.textContent = 'Dzień dobry';
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url(https://marcink50.github.io/Landing-Page/img/afternoon.jpg)";
        greeting.textContent = 'Dzień dobry';
    } else {
        // Evenight
        document.body.style.backgroundImage = "url(https://marcink50.github.io/Landing-Page/img/night.jpg)";
        greeting.textContent = 'Dobry wieczór';
        document.body.style.color = "white";
    }
}

// Run
showTime();
setBgGreet();
