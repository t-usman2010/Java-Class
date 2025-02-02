//Start
let defaultno = 0;
let table_number = parseInt(prompt("Enter the number of table you want to print"));

// Table loop
for (let i = 1; i <= 10; i++) {
    let result = table_number * i;
    document.write("This is the table of " + table_number + " x " + i + " = " + result + "<br>");
    }