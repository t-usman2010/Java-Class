var start_num = parseInt(prompt("Enter Starting Number: "));
var end_num = parseInt(prompt("Enter Ending Number: "));
let nan = 0;

for(var i= start_num; i <=end_num; i++){
    var resutl = start_num*i;
    if(resutl%2==0){
        nan = resutl;
        document.write("Even Number -->"+ start_num + "*" + i + "==" + resutl+"is higher than"+ ((i-1)*start_num) + "</br>");
    }
    else{
        document.write("Odd Number -->" + start_num + "*"+ i + "==" + resutl + "is higher than"+ ((i-1)*start_num) + "</br>");
    }
}