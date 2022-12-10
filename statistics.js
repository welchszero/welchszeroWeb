let canvas = document.getElementById("piechart");
canvas.width = 500;
canvas.height = 500;

let x = canvas.width / 2;
let y = canvas.height / 2;

let context = canvas.getContext("2d");
let padding = 30;

function toRadian(proportion){ //비율을 받아서 라디언으로 변경
    return proportion * 2 * Math.PI;
}

let text = ["매우인기[48.9%]", "다소인기[25.8%]", "일부인기[17.2%]", "보통[8.1%]"];
let data = [48.9, 25.8, 17.2, 8.1];
let colors = ["lightcoral", "lightpink", "mistyrose", "seashell"];
let radius = Math.min(x - (padding), y - (padding)); //캔버스에서 패딩영역을 뺀 공간을 반지름으로 설정함


let startAngle = 0;
let endAngle;

//해당 부분이 전체에서 차지하는 비율을 구하고 2pi곱해서 라디안으로 변환
let total = 0;
for(let i = 0; i < data.length; i++){//배열의 총합
    total += data[i];
}
let textX = 0;
let textY = 0;
let savedForBorder;

for(let j = 0; j < data.length; j++){
    context.beginPath(); //빈경로 생성
    context.moveTo(x, y);
    let proportion = data[j]/total;
    endAngle = startAngle + toRadian(proportion);
    context.arc(x, y, radius, startAngle, endAngle, false);
    context.lineTo(x, y);
    context.closePath();
    context.fillStyle = colors[j];
    context.fill();
    if(j == (data.length - 1)){
        savedForBorder = startAngle;
    }
    startAngle = endAngle;
}

//파이차트 하단부 가이드 설정
let statusCanvas = document.getElementById("status");
let ctx = statusCanvas.getContext("2d");
statusCanvas.width = 500;
statusCanvas.height = 100;
let startX = 30;
let startY = 10;

for(let i = 0; i < data.length; i++){
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.strokeStyle = "black";
    ctx.rect(startX, startY, 30, 30);
    startX += 40;
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText(text[i],startX ,startY * 3);
    startX += 80;
}

//파이차트의 테두리 그리기
context.beginPath();
context.arc(x, y, radius, 0, savedForBorder, false);
context.lineWidth = 10;
context.strokeStyle = "maroon";
context.stroke();

context.beginPath();
context.arc(x, y, radius, 0, savedForBorder, true);
context.lineWidth = 5;
context.strokeStyle = "silver";
context.stroke();

//이미지 로딩시 문자열 순환 이벤트
netflixImg = document.getElementById("netflixImg");
netflixImg.onload = function(){
    let rotateSpan = document.getElementById("movingtitle");
    setInterval(function(){
        rotateSpan.style.color ="lightsteelgrey";
        let spanString = rotateSpan.innerHTML;

        let first = spanString.substr(0, 1);//substr은 deprecated 된듯. 그래도 사용가능
        let rest = spanString.substr(1, spanString.length - 1);
        
        spanString = rest + first;//문자열 concat
        rotateSpan.innerHTML = spanString;
    }, 700);
}
