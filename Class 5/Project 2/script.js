let y = document.getElementById("demo");
let colour = ["red"];
function myFunction() {
    let user_input = document.getElementById("colur").value;
    colour.push(user_input);
    y.innerHTML = colour	

}