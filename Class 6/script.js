let sarting = 0;
let ending = 10;

for(let i=1;i<=10;i++){
    if(i%2!=0){
    document.write("This is odd-->"+i+"<br>");
    }
    for(let j=1;j<=10;j++){
        if(j%2==0){
            document.write("This is even------------->"+j+"<br>");
        }
    }
}