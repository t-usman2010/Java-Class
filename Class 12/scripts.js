//Start
let div = document.getElementById("div1");
let heading = document.createElement("h1");
heading.textContent = "Hello World!";
div.appendChild(heading);

// Part 2
let button = document.getElementById("button");
let i = 0;
button.addEventListener("click", function() {
    if (i == 0){
        button.style.backgroundColor = "red";
        button.style.color = "white";
        i++
    }
    else {
        button.style.backgroundColor = "";
        button.style.color = "";
        --i;
    }    
});

// Part 3
let itemElement = document.getElementById("item");
let cartElement = document.getElementById("Cart");
let buyElement = document.getElementById("Buy");
let warningElement = document.getElementById("warning");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let item_number = 5;
let cart = 0;
let buy = 0;

button2.addEventListener("click", function() {
    if (item_number > 0) {
        cart++;
        item_number--;
        itemElement.innerHTML = "Items left: " + item_number;
        cartElement.innerHTML = "Items in cart: " + cart;
    }
    else {
        warningElement.innerHTML=("No more items left to add to the cart.");
    }
});

button3.addEventListener("click", function() {
    if (cart > 0) {
        buy++;
        cart--;
        cartElement.innerHTML = "Items in cart: " + cart;
        buyElement.innerHTML = "Items bought: " + buy;
    } else {
        warningElement.innerHTML=("No items in the cart to purchase.");
    }
});

