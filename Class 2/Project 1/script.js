//Get Ids
var a1 = document.getElementById("Answer")

//Get Number and symbol from User

let No1 = parseInt(prompt("Enter Your First Numbers"));
let No2 = parseInt(prompt("Enter Your Second Numbers"));
let symbol = prompt("Enter Your Symbol", '+,-,*,/');
let sum = ("+","sum");
let subtract = ("-","subtract");
let multiply = ("*","multiply");
let divide = ("/","divide");

//Getting Result

 if (symbol === sum || symbol === "+"){
    let answer = No1+No2
    a1.innerHTML = ("The Result Is "+ answer)
}
 else if (symbol === subtract || symbol === "-"){
    let answer = No1-No2
    a1.innerHTML = ("The Result Is "+ answer)
}
 else if (symbol === multiply || symbol === "*"){
    let answer = No1*No2
    a1.innerHTML = ("The Result Is "+ answer)
}
 else if (symbol === divide || symbol === "/"){
    let answer = No1/No2
    a1.innerHTML = ("The Result Is "+ answer)
}
 else {
    a1.innerHTML = ("Invalid Oprator")
 }