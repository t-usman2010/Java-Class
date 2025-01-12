
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var sum = document.getElementById('sum'); 


var Reitem = prompt("Enter a item", 'Available items are: Laptop, Phone, Tablet, Iphone');
var item1  = ("Laptop", "laptop")
var item2  = ("Phone" , "phones")
var item3  = ("Tablet" , "tablet")
var item4  = ("Iphone" , "iphone")
var Price1  = ("10,000")
var Price2 = ("50,000")
var Price3 = ("30,000")
var Price4 = ("50,000")
var Price5 = ("100,000")


if (Reitem == item1) {
    sum.innerHTML = item1 + " Is in The range of " + Price1;
}


else if (Reitem == item2) {
    sum.innerHTML = item2 + " Is in The range of " + Price2;
}

else if (Reitem == item3) {
    sum.innerHTML = item3 + " Is in The range of " + Price3;
}

else if (Reitem == item4) {
    sum.innerHTML = item4 + " Is in The range of " + Price4;
}

else {
    num1.innerHTML = "Sorry " + Reitem + " is not available";
}
