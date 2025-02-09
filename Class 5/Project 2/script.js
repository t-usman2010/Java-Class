function myFunction() {
    let x = [15,18,20,27,];
    x.push =(30)
    x.pop =(27)
    for(let i=0; i<x.length; i++){
        if(x[i] % 3 === 0 && x[i] % 5 === 0){
                document.write("FizzBizz"+ x[i] + "<br>");
        }
        else if (x[i] % 3 === 0){
            document.write("Fizz"+ x[i] + "<br>");
        }
        else if (x[i] % 5 === 0){
            document.write("Bizz"+ x[i] + "<br>");
        }
    }
} 