// Source:
function calculate() {
    let rsult = document.getElementById('result');
    let age = document.getElementById('age').value;
    let year = document.getElementById('current_year').value;
    let birthYear = year - age;
    rsult.innerHTML = ("Your birth Year is "+ birthYear);
}