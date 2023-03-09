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

}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#535d6e";
    ctx.fillRect(taskbarX, taskbarY, canvas.width, 45);
    ctx.fillStyle = "#000000";
    ctx.fillRect(taskbarX + 5, taskbarY + 5, 32, 32)
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(cursorX, cursorY, 8, 8)

    // MOUSE
    document.addEventListener("mousemove", mouseMoveHandler);
    function mouseMoveHandler(e) {
        playerX = e.pageX - canvas.offsetLeft - playerWidth / 2;
        playerY = e.pageY - canvas.offsetTop - playerHeight / 2;
        output.innerHTML = "Mouse:  <br />"+ " x: " + playerX + ", y: " + playerY;
    }
    

    requestAnimationFrame(draw)
}
draw();