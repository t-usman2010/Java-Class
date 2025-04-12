//Start
function submit() {
    let code = document.getElementById("input1").value;
    let body = document.getElementById("body");
    if(code == 2010){	
        alert("Correct!")
        body.addEventListener("copy", (event) => { 
            event.preventDefault();
            navigator.clipboard.writeText("Custom text copied to clipboard!").then(() => {
            alert("Custom text has been copied to clipboard!");
            });
        });
    }
    else{
        alert("Incorrect Password")
    }
}