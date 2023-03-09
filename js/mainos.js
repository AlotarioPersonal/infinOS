// INIT
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

this.x = 0;
this.y = 0
this.height = 0;
this.width = 0

var taskbarX = 0
var taskbarY = canvas.height - 45

var cursorX = 100
var cursorY = 100
var cursorWidth = 8
var cursorHeight = 8

var cursor = new Image();
cursor.src = "cursor.png";
cursor.x = cursorX;
cursor.y = cursorY;
cursor.width = cursorWidth;
cursor.height = cursorHeight;



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
    ctx.fillRect(taskbarX + 5, taskbarY + 5, 32, 32);
    //ctx.fillStyle = "#FFFFFF"
    //ctx.fillRect(cursorX, cursorY, 8, 8)

    
    
    ctx.drawImage(cursor, cursorX, cursorY);
    requestAnimationFrame(draw);
}
draw();