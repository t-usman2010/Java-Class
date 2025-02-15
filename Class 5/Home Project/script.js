//Hello

let student = [];
let father = [];
let roll = [];
let class_ = [];
let addmission = [];
let address_ = [];

function getting_information(){
    let name = document.getElementById("name").value;
    let father_name = document.getElementById("father_name").value;
    let roll_no = document.getElementById("roll_number").value;
    let class_Name = document.getElementById("class").value;
    let addmission_number = document.getElementById("admission_number").value;
    let address = document.getElementById("address").value;


    student.push(name);
    father.push(father_name);
    roll.push(roll_no);
    class_.push(class_Name);
    addmission.push(addmission_number);
    address_.push(address);

}
function display(){
    for (let i = 0; i < student.length; i++){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + '<br>');
    }
}
