//Showing Time 
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
}

// Date
function date(){
    let iftar_time = ["6:17","6:17","6:18","6:19","6:20","6:20","6:21",]
    let date_module = new Date();
    let date = date_module.getDay();
    document.getElementById('date').innerHTML = ("Todays Iftar Time is " + iftar_time[date]);
}


function Backgrond(){
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });
    
    
// Add random floating particles in the background
    const body = document.querySelector('body');
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(255,255,255,0.5)';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animation = `float ${Math.random() * 3 + 2}s infinite`;
        body.appendChild(particle);
    }
    
}


//Calling Funtions
date();
Backgrond();
showTime();
setInterval(function () {
	showTime();
}, 1000);
