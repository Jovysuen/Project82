var mouseEvent=""
var canvas=document.getElementById("myCanvas")
var draw=canvas.getContext("2d")
var color=""
var width=0


canvas.addEventListener("mousedown", my_sweda)
function my_sweda(e){
width=document.getElementById("w").value
color=document.getElementById("i").value
mouseEvent="mousedown"
}

canvas.addEventListener("mouseleave", hj)
function hj(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mouseup", sk)
function sk(e){
    mouseEvent="mouseup"
}

canvas.addEventListener("mousemove", yu)
function yu(e){
    current_x=e.clientX-canvas.offsetLeft
    current_y=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        draw.beginPath()
        draw.strokeStyle=color
        draw.lineWidth=width
        draw.arc(current_x,current_y,20,0,2*Math.PI)
        draw.stroke()
    }
    last_x=current_x
    last_y=current_y
}

function clearf(){
    draw.clearRect(0,0,canvas.width,canvas.height)
}