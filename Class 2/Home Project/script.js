document.addEventListener("DOMContentLoaded", function() {
  //Getting Information from the HTML
  let r1 = document.getElementById("R1");
  let r2 = document.getElementById("R2");
  let r3 = document.getElementById("R3");
  let r4 = document.getElementById("R4");

  //Getting Information From User
  let name = prompt("Enter Your Name: ");
  let pin = parseInt(prompt("Enter Your Pin Number: "));
  const name1 = "Ali";
  const pinNumber = 1234;
  const name2 = "Ahmed";
  const pinNumber2 = 5678;

  //Setting default values
  let balance = 1000;
  let deposit = 0;
  let withdraw = 0;
  let amount = 0;
  let choice = 0;
  let balance1 = 5000;
  let deposit1 = 0;
  let withdraw1 = 0;
  let amount1 = 0;
  let choice1 = 0;

  //Checking the Name and Pin
  if (name === name1 && pin === pinNumber) {
      r1.innerHTML = "Welcome " + name1;
      alert("Press 1 to Check Balance, 2 transfer, 3 to Withdraw");
      let choice = parseInt(prompt("Enter Your Choice: "));
      if (choice === 1) {
          r2.innerHTML = "Your Balance is: " + balance;
      } else if (choice === 2) {
          let deposit = parseInt(prompt("Enter Account Number to Transfer: "));
          if (deposit === 123456) {
              let amount = parseInt(prompt("Enter Amount to Transfer: "));
              balance -= amount;
              r3.innerHTML = "Your New Balance is: " + balance;
          } else {
              r3.innerHTML = "Invalid Account Number";
          }
      } else if (choice === 3) {
          let withdraw = parseInt(prompt("Enter Amount to Withdraw: "));
          if (withdraw > balance) {
              r4.innerHTML = "Insufficient Balance";
          } else {
              balance -= withdraw;
              r4.innerHTML = "Your New Balance is: " + balance;
          }
      } else {
          r1.innerHTML = "Invalid Choice";
      }
  } else if (name === name2 && pin === pinNumber2) {
      r1.innerHTML = "Welcome " + name;
      alert("Press 1 to Check Balance, 2 transfer, 3 to Withdraw");
      let choice = parseInt(prompt("Enter Your Choice: "));
      if (choice === 1) {
          r2.innerHTML = "Your Balance is: " + balance1;
      } else if (choice === 2) {
          let deposit1 = parseInt(prompt("Enter Account Number to Transfer: "));
          if (deposit1 === 123456) {
              let amount1 = parseInt(prompt("Enter Amount to Transfer: "));
              balance1 -= amount1;
              r3.innerHTML = "Your New Balance is: " + balance1;
          } else {
              r3.innerHTML = "Invalid Account Number";
          }
      } else if (choice === 3) {
          let withdraw1 = parseInt(prompt("Enter Amount to Withdraw: "));
          if (withdraw1 > balance1) {
              r4.innerHTML = "Insufficient Balance";
          } else {
              balance1 -= withdraw1;
              r4.innerHTML = "Your New Balance is: " + balance1;
          }
      } else {
          r1.innerHTML = "Invalid Choice";
      }
  } else {
      r1.innerHTML = "Invalid Name or Pin";
  }
});