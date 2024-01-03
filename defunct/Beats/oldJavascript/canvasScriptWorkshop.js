// import rough from 'https://unpkg.com/roughjs/bundled/rough.esm.js';



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
console.log("I'm here!")
// const generator = rough.generator();
// const rc = rough.canvas(canvas);
ctx.clearRect(0, 0, canvas.width, canvas.height);

// const rect = generator.rectangle(10, 10, 200, 100);
// const line = generator.line(10, 10, 210, 130);
// rc.draw(rect);
// rc.draw(line);

ctx.lineWidth=2
let isPainting = false; 
let lineWidth=2;
let startX;
let startY;
var drawMode=false;
console.log(drawMode)

// const drawMode= document.getElementById ("drawModeToggle")

// function drawToggle (){
//     if (element.innerText==='Draw Mode On'){
//         element.innerText = "Draw Mode Off";
// }
//     else if (element.innerText = "Draw Mode Off"){
//         (element.innerText==='Draw Mode On')
//     }
// }

function drawToggle(element){
    if (element.innerText==='DrawModeOn'){
        element.innerText = "DrawModeOff";
        drawMode=false;
        console.log(drawMode)

}
    else if (element.innerText === 'DrawModeOff'){
        element.innerText ="DrawModeOn"
        drawMode=true;
        console.log(drawMode)
    }
}




canvas.addEventListener("mousedown", (e) => {
    if (drawMode===true){
    const rect = e.target.getBoundingClientRect();
    isPainting = true
    ctx.beginPath;
    ctx.moveTo(e.clientX-rect.left, e.clientY-rect.top)
}
    // startX=e.clientX -rect.left;
    // startY=e.clientY -rect.top;
});

const draw = (e) => {
    if(!isPainting){
        return;
    }

    const rect = e.target.getBoundingClientRect();
    ctx.lineWidth=lineWidth;
    ctx.lineTo(e.clientX-rect.left, e.clientY-rect.top)
    ctx.stroke();

canvas.addEventListener("mouseup", (e) => {
isPainting = false
ctx.stroke();
ctx.beginPath;
});


}
canvas.addEventListener ("mousemove", draw); 
