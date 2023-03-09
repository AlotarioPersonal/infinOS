// INIT
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

taskbarX = 0
taskbarY = canvas.height - 45

// DRAW
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#535d6e";
    ctx.fillRect(taskbarX, taskbarY, canvas.width, 45);
    ctx.fillStyle = "#000000";
    ctx.fillRect(taskbarX + 5, taskbarY + 5, 32, 32)
    

    requestAnimationFrame(draw)
}
draw();