function date(){
    let date = new Date();
    let print2 = document.getElementById('h2').innerHTML = date;
}
function time__left(){
    let date = new Date();
    let currentYear = date.getTime();
    let newYear = new Date('1 Jan, 2026');
    let newYearTime = newYear.getTime();
    let timeLeft = newYearTime - currentYear;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let print1 = document.getElementById('h1').innerHTML = days;
}

time__left();
setInterval(time__left,1000);
date();
setInterval(date,1000);