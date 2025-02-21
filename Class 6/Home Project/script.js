//Hello

let student = [];
let father = [];
let roll = [];
let class_ = [];
let addmission = [];
let address_ = [];
Class_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
            if(class_[i] == Class_number[0]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 1"+'<br>');
        }
        else if(class_[i] == Class_number[1]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 2"+'<br>');
        }
        else if(class_[i] == Class_number[2]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 3"+'<br>');
        }
        else if(class_[i] == Class_number[3]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 4"+'<br>');
        }
        else if(class_[i] == Class_number[4]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 5"+'<br>');
        }
        else if(class_[i] == Class_number[5]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 6"+'<br>');
        }
        else if(class_[i] == Class_number[6]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 7"+'<br>');
        }
        else if(class_[i] == Class_number[7]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 8"+'<br>');
        }
        else if(class_[i] == Class_number[8]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 9"+'<br>');
        }
        else if(class_[i] == Class_number[9]){
        document.write('Name: ' + student[i] + ' Father name: ' + father[i] + ' Roll No: ' + roll[i] + ' Class: ' + class_[i] + ' Admission Number: ' + addmission[i] + ' Address: ' + address_[i] + "<---------Class 10"+'<br>');
        }
    }

    }

