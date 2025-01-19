//Geting Ids
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let h4 = document.getElementById("h4");

// Ringing

let call = prompt("You Want To call Customer Sevice");
alert("Ringing");
alert("For Calling Agent Press 1");
alert("For Getting Loan Press 2");
alert("For Getting Package detail Press 3");
alert("For Getting Card Press 4");
let getting = parseInt(prompt("Enter the Number"));

//If Else
 
if (getting === 1 ){
    alert("We are Forwading Data to Agent Please Wait");
    h1.innerHTML = ("Hlo I am Your agent what is yours Problem");
    let problem = prompt("Type Here")
    h2.innerHTML = ("We are working in your Problem")
    let rate = ("Type Our rating")
}
else if (getting === 2){
    alert("We are Getting Information Please Wait");
    h1.innerHTML = ("We tranfer Rs 0.005 to Your account");
    let rate = ("Type Our rating")
}
else if(getting === 3){
    alert("We are PAkage detail Please Wait");
    h1.innerHTML = ("What Type Of problem You Want");
    let problem = prompt("Type Here")
    h2.innerHTML = ("We are working in your Package")
    let rate = ("Type Our rating")
}
else if(getting === 4){
    alert("We are Card Detail Please Wait");
    h1.innerHTML = ("What Type Of card You Want");
    let problem = prompt("Type Here")
    h2.innerHTML = ("We are working in your Request")
    let rate = ("Type Our rating")
}
else{
    h1.innerHTML = ("Invail Responce")
    h2.innerHTML = ("Press Refresh Button On Top To ")
}

