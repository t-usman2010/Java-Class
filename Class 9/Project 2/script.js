function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);