//First Part
function Table() {
    let div = document.getElementById("div1")
    for (var i = 100; i > 0; i--) {
        let number = document.getElementById("num").value;
        let table = number * i
        let result = document.createElement("p");
        result.innerHTML = number + " * " + i + " = " + table;
        result.style.animationDelay = (100 - i) * 0.01 + "s";
        div.appendChild(result);
    }
}

//Second Part
function Finder() {
    let div = document.getElementById("div2");
    let result = document.createElement("p");
    let result2 = document.createElement("p");
    result.className = "highest";
    result2.className = "lowest";
    let numbers = [393, 3948, 103, 491, 20100101];
    let highestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }
    result.innerHTML = "The highest number is: " + highestNumber;
    div.appendChild(result);
    let lowestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < lowestNumber) {
            lowestNumber = numbers[i];
        }
    }
    result2.innerHTML = "The lowest number is: " + lowestNumber;
    div.appendChild(result2);
}
//Third Part
function Checking_Number() {
    let div = document.getElementById("div3");
    for (let i = 1; i <= 100; i++) {
        let result = document.createElement("p");
        if (i % 3 == 0 && i % 5 == 0) {
            result.className = "checking fizzbizz";
            result.innerHTML = i + " is FizzBizz";
        } else if (i % 5 == 0) {
            result.className = "checking bizz";
            result.innerHTML = i + " is Bizz";
        } else if (i % 3 == 0) {
            result.className = "checking fizz";
            result.innerHTML = i + " is Fizz";
        } else {
            result.className = "checking neither";
            result.innerHTML = i + " is neither Fizz nor Bizz";
        }
        div.appendChild(result);
    }
}
let body = document.getElementById("body");
let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
pic1.addEventListener("mouseover", function() {
    pic1.className = "hide";
    pic2.className = "image-style";
});

