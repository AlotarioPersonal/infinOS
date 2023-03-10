var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

this.x = 0
this.y = 0
this.width = 0
this.height = 0

var cursorX = 100
var cursorY = 100
var cursorWidth = 8
var cursorHeight = 8

var cursor = new Image();
cursor.src = "js/cursor.png"
cursor.x = cursorX
cursor.y = cursorY
cursor.width = cursorWidth
cursor.height = cursorHeight

canvas.style.background = "#FFFFFF";

//cursor functionality

document.addEventListener("mousemove", mouseMoveHandler);
    function mouseMoveHandler(e) {
        cursorX = e.pageX - canvas.offsetLeft - cursorWidth / 2;
        cursorY = e.pageY - canvas.offsetTop - cursorHeight / 2;
    }


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    ctx.drawImage(cursor, cursorX, cursorY)
    ctx.font = "20px Arial"
    ctx.fillText("The Quick Brown Fox Jumps Over The Lazy Dog")
    
    requestAnimationFrame(draw)
}

draw();