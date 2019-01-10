let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
let degDiv = document.getElementById("deg")
let sinDiv = document.getElementById("sin")
let cosDiv = document.getElementById("cos")
let tgDiv = document.getElementById("tg")
let mouseX;
let mouseY;
let offset = 20
let radius = cvs.clientWidth / 2 - offset;
let a;
let xEnd;
let yEnd;
calc();
firstDraw();

function firstDraw() {
    ctx.beginPath();
    ctx.arc(radius + offset, radius + offset, radius, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(radius + offset, offset)
    ctx.lineTo(radius + offset, radius * 2 + offset);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offset, radius + offset)
    ctx.lineTo(radius * 2 + offset, radius + offset);
    ctx.closePath();
    ctx.stroke();
}

function drawAngle() {
    ctx.clearRect(0, 0, cvs.clientWidth, cvs.clientHeight);
    firstDraw();
    ctx.beginPath();
    ctx.moveTo(radius + offset, radius + offset)
    ctx.lineTo(xEnd, yEnd);
    ctx.closePath();
    ctx.stroke();
}

function drawPoint() {
    xEnd = (radius + offset) + radius * Math.cos(a + Math.PI);
    yEnd = (radius + offset) + radius * Math.sin(a + Math.PI);

    ctx.beginPath();
    ctx.arc(radius + offset, radius + offset, radius - radius / 1.2, 0, a - Math.PI, true);
    ctx.stroke();
}
cvs.addEventListener('mousemove', function(event) {
    let rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
    calc();
    drawAngle();
    drawPoint();
}, false);

function calc() {

    a = Math.atan2(radius + offset - mouseY, radius + offset - mouseX)
    let deg = Math.round(-a / Math.PI * 180 + 180);
    let sin = Math.sin(deg * Math.PI / 180).toFixed(3);
    let cos = Math.cos(deg * Math.PI / 180).toFixed(3);
    let tan = Math.tan(deg * Math.PI / 180).toFixed(3);

    degDiv.innerHTML = "degrees " + deg;
    sinDiv.innerHTML = "sin= " + sin;
    cosDiv.innerHTML = "cos= " + cos;
    tgDiv.innerHTML = "tg= " + tan;
}
