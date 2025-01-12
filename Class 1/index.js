// Source:
var subject = document.getElementById('subject');
var subject2 = document.getElementById('subject2');
var subject3 = document.getElementById('subject3');


//Getting bill amount from user
var Dish1 = parseInt(prompt('Enter a Pizza'));
var Dish2 = parseInt(prompt('Enter a Samosa'));
var Dish3 = parseInt(prompt('Enter a Tea'));
var Dish4 = parseInt(prompt('Enter a Coffee'));
var Dish5 = parseInt(prompt('Enter a Burger'));
var Dish6 = parseInt(prompt('Enter a Fries'));
var Totle = ( Dish1 + Dish2 + Dish3 + Dish4 + Dish5 + Dish6);
var discount = (Totle*(10/100))
var final = (Totle - discount);

//Displaying the bill amount
subject.innerHTML = "The Totle Bill is " + Totle;
subject2.innerHTML = "Discout from the bill " + discount;
subject3.innerHTML = "Final Price " + final;
