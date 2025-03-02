let name = ("Shahzaib Khan");
let i = 0
function paragrapg(){
    let para = document.getElementById('shoing').innerHTML;
     para = para.toUpperCase()
    shoing.innerHTML = para;
}
function showmsg2(){
    let user_name = document.getElementById('show');
    if (i == 0){
        let small_name = name.toLowerCase();
        user_name.innerHTML = small_name;
    } 
    else if (i == 1){
        let capital_name = name.toUpperCase();
        user_name.innerHTML = capital_name;
    }
    i = (i + 1) % 2;
}