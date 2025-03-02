// var a = 10;
// function kamker(value){
//     a+=value;
//     // document.write(a);
//     kamker(5);
// }

// var a = ["video.mp4", "video1.mp4", "video2.mp4"];

// let gamechanger = ()=>{
//     for (let i = 0; i < a.length; i++){
//         a[i] = a[i].replace("video", "game");
//     }
//     document.write(a);
// }
let number = 80938;

function roundToNearestTen(number) {
    return Math.round(number / 10) * 10;
}

function round() {
    number = roundToNearestTen(number);
    // document.write(number);
    console.log(number);
}

round();
