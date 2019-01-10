let cvs = document.getElementById("canvas"); 
let ctx = cvs.getContext("2d"); 
let mouseX; 
let mouseY; 
let offset = 20 
let radius = cvs.clientWidth / 2 - offset; 
let a; 
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
cvs.addEventListener('mousemove', function(event) { 
let rect = canvas.getBoundingClientRect(); 
mouseX = event.clientX - rect.left; 
mouseY = event.clientY - rect.top; 
calc(); 
}, false); 

function calc() { 

a = Math.atan2(radius + offset - mouseY, radius + offset - mouseX) 
//console.log(a); //simple rad
//console.log(-a + Math.PI) //trigonometry rad 
console.log(Math.round(-a / Math.PI * 180 + 180)); //trigonometry degrees 
console.log("sin "+Math.sin(-a + Math.PI).toFixed(3)); 
console.log("cos "+Math.cos(-a + Math.PI).toFixed(3)); 
} 
function rounded(number, points) { 
return +number.toFixed(points); 
} 




//console.log(Math.round(-a / Math.PI * 180 + 180));
//Math.Atan2(200 - mouseY, 200 - mouseX) / Math.PI * 180