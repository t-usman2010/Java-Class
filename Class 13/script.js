//start
function start() {
    let h1 = document.getElementById("h1");
    let div = document.getElementById("div");
    let input = document.createElement("input");
    let button = document.createElement("button");
    input.type = "number";
    input.id = "inputField";
    input.placeholder = "Type Your Choice Here";
    h1.innerHTML = "Welcome to the Call Center Press 1 to call to agent or 2 to call to the manager";
    div.appendChild(h1);
    div.appendChild(input);
    div.appendChild(button);
    button.type = "button";
    button.innerHTML = "Submit";
    button.onclick = function calling_sevices() {
        let inputValue = document.getElementById("inputField").value;
        let div2 = document.getElementById("div2");
        if (inputValue == 1) {
            let input2 = document.createElement("input");
            input2.type = "text";
            input2.id = "inputField2";
            input2.placeholder = "Type Sim Name Here";
            let button2 = document.createElement("button");
            button2.type = "button";
            button2.innerHTML = "Submit";
            let h2 = document.createElement("h2");
            h2.innerHTML = "Please Enter Your Sim Name";
            div.innerHTML = "";
            div2.appendChild(h2); 
            div2.appendChild(input2);
            div2.appendChild(button2);
            button2.onclick = function calling_agent() {
                let inputValue2 = document.getElementById("inputField2").value.toUpperCase();
                if(inputValue2 == "JAZZ"){
                    alert("You are connected to the agent, please wait for a moment.");
                }
                else if(inputValue2 == "TELENOR"){
                    alert("You are connected to the agent, please wait for a moment.");
                }
                else if(inputValue2 == "UFONE"){
                    alert("You are connected to the agent, please wait for a moment.");
                }
                else if(inputValue2 == "ZONG"){
                    alert("You are connected to the agent, please wait for a moment.");
                }
                else{
                    alert("Please enter a valid sim name.");
                }
            };
        } else if (inputValue == 2) {
            let input3 = document.createElement("input");
            input3.type = "text";
            input3.id = "inputField3";
            input3.placeholder = "Type Manager Name Here";
            let button3 = document.createElement("button");
            button3.type = "button";
            button3.innerHTML = "Submit";
            let h2 = document.createElement("h2");
            h2.innerHTML = "Please Enter Your Manager Name";
            div.innerHTML = "";
            div2.appendChild(h2); 
            div2.appendChild(input3);
            div2.appendChild(button3);
            button3.onclick = function calling_manager() {
                let inputValue3 = document.getElementById("inputField3").value.toUpperCase();
                if(inputValue3 == "ALI"){
                    alert("You are connected to the manager, please wait for a moment.");
                }
                else if(inputValue3 == "AHMED"){
                    alert("You are connected to the manager, please wait for a moment.");
                }
                else if(inputValue3 == "SARA"){
                    alert("You are connected to the manager, please wait for a moment.");
                }
                else if(inputValue3 == "SANA"){
                    alert("You are connected to the manager, please wait for a moment.");
                }
                else{
                    alert("Please enter a valid manager name.");
                }
            };
        } else {
            alert("Please enter a valid choice.");
        }
    };
}