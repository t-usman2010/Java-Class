// available items
alert("we have 5 items available for sale");

// Item From User
var u1 = document.getElementById("item");
var u2 = document.getElementById("Quantity");
var u3 = document.getElementById("Price");
var u4 = document.getElementById("Discount");
var u5 = document.getElementById("F_P");

var item1 = prompt("Enter the number items you want to buy",);
var item2 = parseInt(prompt("Enter the Quantity"));
var item3 = 1000;
var item4 = (item2 * item3);
var item5 = (item4 * 10 / 100);
var item6 = (item4 - item5);

u1.innerHTML = "Selected Item: " + item1;
u2.innerHTML = "Quantity: " + item2;
u3.innerHTML = "Price: " + item4;
u4.innerHTML = "Discount: " + item5;
u5.innerHTML = "Final Price: " + item6;
