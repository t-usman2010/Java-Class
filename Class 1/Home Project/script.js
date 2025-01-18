// Getting Information in html Page
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let q6 = document.getElementById("q6");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");
let a6 = document.getElementById("a6");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let total = document.getElementById("total");
let Diss = document.getElementById("Diss");
let FinPri = document.getElementById("FinPri");

// Set Default Value
const d1 = "Chiken Burger";
const d2 = "Beef Burger";
const d3 = "Cheese Burger";
const d4 = "French Fries";
const d5 = "Soft Drinks";
const d6 = "Water Bottle";
const tt1 = ("Totle")
const tt2 = ("Disscount");
const tt3 = ("Final Price")

// Get Information From User
let z1 = prompt("You Order Chiken burger");
let z2 = prompt("You Order Beef burger");
let z3 = prompt("You Order of Cheese burger");
let z4 = prompt("You Order French fries");
let z5 = prompt("You Order Soft drinks");
let z6 = prompt("You Order Water bottle");
let credit = prompt("Will You Pay Through Credit or Debit Card",'Type yes to get 8% Disscount')
const yes = "yes";

// Declare variables outside the if blocks
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;

// Printing Bill
if (z1 === yes) {
  c1 = parseInt(prompt("How many Chiken burger you want"));
  a1.innerHTML = d1;
  q1.innerHTML = c1;
  p1.innerHTML = c1 * 200;
}
if (z2 === yes) {
  c2 = parseInt(prompt("How many Beef burger you want"));
  a2.innerHTML = d2;
  q2.innerHTML = c2;
  p2.innerHTML = c2 * 250;
}
if (z3 === yes) {
  c3 = parseInt(prompt("How many Cheese burger you want"));
  a3.innerHTML = d3;
  q3.innerHTML = c3;
  p3.innerHTML = c3 * 300;
}
if (z4 === yes) {
  c4 = parseInt(prompt("How many French fries you want"));
  a4.innerHTML = d4;
  q4.innerHTML = c4;
  p4.innerHTML = c4 * 150;
}
if (z5 === yes) {
  c5 = parseInt(prompt("How many Soft drinks you want"));
  a5.innerHTML = d5;
  q5.innerHTML = c5;
  p5.innerHTML = c5 * 50;
}
if (z6 === yes) {
  c6 = parseInt(prompt("How many Water bottle you want"));
  a6.innerHTML = d6;
  q6.innerHTML = c6;
  p6.innerHTML = c6 * 20;
}

// Calculate Total Amount
let totalAmount = (c1 * 200) + (c2 * 250) + (c3 * 300) + (c4 * 150) + (c5 * 50) + (c6 * 20);
let disscount = ((totalAmount * 8) / 100)
let final = (totalAmount - disscount)

// Display Total Amount
if (credit === yes) {
  t1.innerHTML = tt1
  t2.innerHTML = tt2
  t3.innerHTML = tt3
  total.innerHTML = totalAmount;
  Diss.innerHTML = disscount;
  FinPri.innerHTML = final;

}

else {
  t1.innerHTML = tt1
  total.innerHTML = totalAmount
}

//End Of The Jave Script