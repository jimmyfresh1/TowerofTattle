import rough from 'https://unpkg.com/roughjs/bundled/rough.esm.js';



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
console.log("I'm here!")
const generator = rough.generator();
const rc = rough.canvas(canvas);
ctx.clearRect(0, 0, canvas.width, canvas.height);

const rect = generator.rectangle(10, 10, 200, 100);
const line = generator.line(10, 10, 210, 110);
rc.draw(rect);
rc.draw(line);

ctx.lineWidth=2


let isPainting = false; 
let lineWidth=2;
let startX;
let startY;

window.addEventListener("mousedown", (e) => {
    isPainting = true
    startX=e.clientX ;
    startY=e.clientY;
});


window.addEventListener("mouseup", (e) => {
isPainting = false
ctx.stroke();
ctx.beginPath;
});

const draw = (e) => {
    if(!isPainting){
        return;
    }
    console.log ("Mouse X: " +e.clientX)
    console.log ("Mouse Y " +e.clientY)

    ctx.lineWidth=lineWidth;
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke();
}
window.addEventListener ("mousemove", draw); 

