function genratetableup() {
    // Let Number
    let t_no = document.getElementById("t_no").value;
    let s_no = document.getElementById("s_no").value;
    let l_no = document.getElementById("l_no").value;

    // Setting Logic
    let output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous content

    for (let i = s_no; i <= l_no; i++) {
        let line = document.createElement("div");
        line.className = 'text-lg sm:text-xl text-red-700 mt-2 text-center drop-shadow-lg';
        line.innerHTML = t_no + " x " + i + " = " + t_no * i;
        output.appendChild(line);
    }
}

function genratetabledown() {
    // Let Number
    let t_no = document.getElementById("t_no").value;
    let s_no = document.getElementById("s_no").value;
    let l_no = document.getElementById("l_no").value;

    // Setting Logic
    let output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous content

    for (let i = l_no; i >= s_no; i--) {
        let line = document.createElement("div");
        line.className = 'text-lg sm:text-xl text-green-700 mt-2 text-center drop-shadow-lg';
        line.innerHTML = t_no + " x " + i + " = " + t_no * i;
        output.appendChild(line);
    }
}