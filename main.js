canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastPositionOfX, lastPositionOfY;
color= "aqua";
width_of_line= 5;
canvas.addEventListener("mouseDown", my_mouseDown);
function my_mouseDown(e){
    MouseEvent="mouseDown";
    
}
canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp(e){
    MouseEvent="mouseUp";
    
}
canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e){
    MouseEvent="mouseLeave";
    
}
canvas.addEventListener("mouseMove", my_mouseMove);
function my_mouseMove(e){
    currentPositionOfX=e.clientX-canvas.offsetLeft;
    currentPositionOfY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=width_of_line;
        console.log("lastPositionOfXAndYCoordinates=");
        console.log("x="+lastPositionOfX+"y="+lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY)
        console.log("currentPositionOfXAndYCoordinates=");
        console.log("x="+currentPositionOfX+"y="+currentPositionOfY);
        ctx.moveTo(currentPositionOfX, currentPositionOfY);
        ctx.stroke();
    }
    lastPositionOfX=currentPositionOfX;
    lastPositionOfY=currentPositionOfY;
}
