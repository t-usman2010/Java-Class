// Start
let defaultno = 0;
let table_number = parseInt(prompt("Enter the number of table you want to print"));

// Create a container for the table
let tableContainer = document.createElement('div');
tableContainer.className = 'bg-white p-6 rounded-lg shadow-lg mt-6 mx-auto max-w-md';

// Create a title for the table
let tableTitle = document.createElement('h2');
tableTitle.className = 'text-2xl font-bold text-center text-purple-600 mb-4';
tableTitle.textContent = `Multiplication Table of ${table_number}`;
tableContainer.appendChild(tableTitle);

// Table loop
for (let i = 1; i <= 10; i++) {
    let result = table_number * i;
    let tableRow = document.createElement('p');
    tableRow.className = 'text-lg text-blue-800';
    tableRow.innerHTML = `${table_number} x ${i} = <span class="text-yellow-500">${result}</span>`;
    tableContainer.appendChild(tableRow);
}

// Append the table container to the body
document.body.appendChild(tableContainer);