// INIT
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

rightPressed = false;
leftPressed = false;
upPressed = false;
downPressed = false;

taskbarX = 0
taskbarY = canvas.height - 45

cursorX = 100
cursorY = 100
cursorWidth = 8
cursorHeight = 8



document.addEventListener("mousemove", mouseMoveHandler);
    function mouseMoveHandler(e) {
        cursorX = e.pageX - canvas.offsetLeft - cursorWidth / 2;
        cursorY = e.pageY - canvas.offsetTop - cursorHeight / 2;
    }


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#535d6e";
    ctx.fillRect(taskbarX, taskbarY, canvas.width, 45);
    ctx.fillStyle = "#000000";
    ctx.fillRect(taskbarX + 5, taskbarY + 5, 32, 32)
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(cursorX, cursorY, 8, 8)

    
    

    requestAnimationFrame(draw)
}
draw();