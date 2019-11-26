function Hero(x, y, img) {
    this.imageObj = img;
    this.x = x;
    this.y = y;
    this.distance = 2;
    this.direction = 4;
    this.drawImg = function (ctx) {
        ctx.drawImage(this.imageObj, this.x, this.y, 50, 50);
    }
    this.moveUp = function () {
        this.y -= this.distance;
    }
    this.moveDown = function () {
        this.y += this.distance;
    }
    this.moveLeft = function () {
        this.x -= this.distance;
    }
    this.moveRight = function () {
        this.x += this.distance;
    }
}
let myCanvas = document.getElementById("myCanvas");
let myImage = document.getElementById("myImage");
let ctx = myCanvas.getContext("2d");
let imageObj = new Image();
imageObj.src = myImage.src;
let hero = new Hero(30, 30, imageObj);

window.onload = function () {
    updateHero();
}
document.addEventListener('keyup', move);

const MoveUp = 38,
    MoveDown = 40,
    MoveRight = 39,
    MoveLeft = 37,
    MoveSpeed = 65,
    MoveBack = 68,
    MoveStop = 32;
function move(e) {
    switch (e.keyCode) {
        case MoveRight:
            hero.direction = 3;
            break;
        case MoveDown:
            hero.direction = 4;
            break;
        case MoveLeft:
            hero.direction = 1;
            break;
        case MoveUp:
            hero.direction = 2;
            break;
        case MoveSpeed:
            hero.distance = 4;
            break;
        case MoveBack:
            hero.distance = 2
            break;
        case MoveStop:
            hero.distance = 0
            break;
    }
}
function updateHero() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    hero.drawImg(ctx);

    if (hero.direction == 3) hero.moveRight();
    if (hero.direction == 4) hero.moveDown();
    if (hero.direction == 1) hero.moveLeft();
    if (hero.direction == 2) hero.moveUp();

    requestAnimationFrame(updateHero, 1000);
}



