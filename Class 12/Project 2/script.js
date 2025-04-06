//Test
var total = 5;
var cartData = 0;
var buyData = 0;

var totalItems = document.getElementById("totalItems");
var buyButton = document.getElementById("buy");
var buyValue = document.getElementById("buyValue");
var cartButton = document.getElementById("cart");
var cartValue = document.getElementById("cartValue");
var warning = document.getElementById("warning");

totalItems.innerHTML = "Total items: " + total;
cartValue.innerHTML = "Items in cart: " + cartData;
buyValue.innerHTML = "Items bought: " + buyData;

cartButton.addEventListener("click", () => {
    if (total > 0) {
        ++cartData;
        --total;
        cartValue.innerHTML = "Items in cart: " + cartData;
        totalItems.innerHTML = "Total items: " + total;
    } else {
        warning.innerHTML("No more items to add to the cart.");
    }
});

buyButton.addEventListener("click", () => {
    if (cartData > 0) {
        buyData += cartData;
        cartData = 0;
        buyValue.innerHTML = "Items bought: " + buyData;
        cartValue.innerHTML = "Items in cart: " + cartData;
    } else {
        warning.innerText("No items in the cart to purchase.");
    }
});
