//Start
let body = document.getElementById("body");
let copyIsAllowed = false;

body.addEventListener("copy", function(event) {
    if (copyIsAllowed == false) {
        event.preventDefault();
        navigator.clipboard.writeText("First enter the password to copy!");
    }
});

function submit() {
    let password = document.getElementById("input1").value;
    
    if (password == 2010) {
        alert("Correct Password! You can now copy.");
        copyIsAllowed = true;
    } else {
        alert("Incorrect Password!");
        copyIsAllowed = false;
    }
}
//End