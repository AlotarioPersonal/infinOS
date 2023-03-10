var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var hoveringhome = false;

this.x = 0;
this.y = 0;
this.height = 0;
this.width = 0;

var taskbarX = 0;
var taskbarY = canvas.height - 45;

var cursorX = 100;
var cursorY = 100;
var cursorWidth = 8;
var cursorHeight = 8;

var homeX = taskbarX + 5
var homeY = taskbarY + 5
var homeWidth = 32
var homeHeight = 32

var img = new Image();
img.src = "js/cursor.png";
img.x = cursorX;
img.y = cursorY;
img.width = cursorWidth;
img.height = cursorHeight;

var home = new Image();
home.src = "icons/home.png";
home.x = homeX;
home.y = homeY;
home.width = homeWidth;
home.height = homeHeight;



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
    //ctx.fillRect(homeX, homeY, homeWidth, homeHeight);
    //ctx.fillStyle = "#FFFFFF"
    //ctx.fillRect(cursorX, cursorY, 8, 8)


    ctx.drawImage(home, homeX, homeY)

    ctx.drawImage(img, cursorX, cursorY);
    requestAnimationFrame(draw);
}


function logicRepeaters() {

    //############################################LOGIC CHECKERS

    if (cursorX < homeX + homeWidth &&
        cursorX + cursorWidth > homeX &&
        cursorY < homeY + homeHeight &&
        cursorY + cursorHeight > homeY) {

            //this needs to be sorted into 4 separate checks
            hoveringhome = true;

        } else {

            hoveringhome = false;
            

        }


    //#############################################PHYSICAL CHECKERS

    if (hoveringhome == true) {

        homeY = 298
        homeWidth = 232
        homeHeight = 288
        home.src = "icons/homebackground.png"

    } else if (hoveringhome == false) {

        homeY = taskbarY + 5
        homeWidth = 32
        homeHeight = 32
        home.src = "icons/home.png"

    }

    

    requestAnimationFrame(logicRepeaters)
}

draw();
logicRepeaters();