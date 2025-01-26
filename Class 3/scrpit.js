var start_num = parseInt(prompt("Enter Starting Number: "));
var end_num = parseInt(prompt("Enter Ending Number: "));

for(var i= start_num; i <=end_num; i++){
    var resutl = start_num*i;
    if(resutl%2==0){
        document.write("Even Number -->" + i + "==" + resutl+ "</br>");
    }
    else{
        document.write("Odd Number -->" + i + "==" + resutl+ "</br>");
    }
}