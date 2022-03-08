const canvas = document.getElemantById("ponggame");
const context = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 400;

let scoreOne = 0;
let scoreTwo = 0;w

//key movement
window.addEventListener("keypress, doKeyDown, false");

function doKeyDown(e){
    const key = e.key;
    if (key == "w" && playerOne.y - playerOne.gravity > 0)
      playerOne.y -= playerOne.gravity * 4;
    else if (
       key == "s" &&
       playerOne.y + playerOne.height + playerOne.gravity < canvas.height
    ) 
       playerOne += playerOne.gravity * 4;

    if (key == "i" && playerTwo.y - playerTwo.gravity > 0)
       playerTwo.y -= playerTwo.gravity * 4;  
    else if (
        key == "k" &&
        playerTwo.y + playerTwo.height + playerTwo.gravity < canvas.height
     ) 
        playerTwo += playerTwo.gravity * 4;
    
}
class Element{
    constructor(options){
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;
        this.speed = options.speed || 2;
        this.gravity = options.gravity;

    }
}
   //first paddle
const PlayerOne = new Element({
    x: 10,
    y: 200,
    width: 15,
    height: 80, 
    color: "#fff",
    gravity: 2,
    });
    
    //second paddle
const playerTwo = new Element ({
    x: 625,
    y: 200,
    width: 15,
    height: 80,
    color: '#fff',
    gravity: 2,
    })
    
    
    //ball
const ball = new Element({
    x: 650 /2,
    y: 400 /2,
    width: 15,
    height: 15,
    color: "#20C20E", 
    speed: 1,
    gravity: 1,
    })
    
    //Player one score text
function displayScoreOne(){
    context.font = "18px Arial"
     context.fillStyle = "#fff"
     context.fillText(scoreOne, canvas.width / 2 - 60, 30)
 }

    //Player two score text
 function displayScoreTwo(){
     context.font = "18px Arial"
     context.fillStyle = "#fff"
     context.fillText(scoreTwo, canvas.width / 2 + 60, 30)

     //make ball bounce
function ballBounce() {
    if(ball.y + ball.gravity <= 0 || ball.y + ball.gravity >= canvas.height){
        ball.gravity = ball.gravity * -1;
        ball.y = ball.gravity;
        ball.x = ball.speed;
    }  else {
        ball.y = ball.gravity;
        ball.x = ball.speed;    
        }
    }
    ballWallCollision();
}

    //detect collision
function ballWallCollision() {
    if (
        ball.x + ball.speed <= 0 ||
        ball.x + ball.speed + ball.width >= canvas.width
    ) {
        ball.y += ball.gravity;
        ball.speed = ball.speed * -1;
        ball.x += ball.speed;
    }
    drawElements();
}




function ballBounce() {
           if(ball.y + ball.gravity <= 0 || ball.y + ball.gravity >= canvas.height){}
        ballWallCollision();
    }

 //draw elements
function drawElement(element) {
    context.fillStyle = element.color;
    context.fillRect(element.x, element.y, element.width, element.height);
    }

   

function drawElement() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawElement(playerOne);
    drawElement(playerTwo);
    drawElement(ball);
    displayScoreOne();
    displayScoreTwo();
    }

    




    function loop() {
        ballBounce();
        window.requestAnimationFrame(loop);
    }