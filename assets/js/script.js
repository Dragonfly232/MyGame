const canvas = document.getElemantById("pongGame");
const context = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 400;

let scoreOne = 0;
let scoreTwo = 0;

class Element{
    constructor(options){
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;
        this.speed = options.x || 2;
        this.gravity = options.x;

    }
}

const PlayerOne = new Element({
    x: 10,
    y: 200,
    width: 80,
    height:
    color: "#fff",
    gravity: 2,
    });
    //second paddle

const playerTwo = new Element ({
    x:
    y:
    width: 80,
    height:
    color: "#fff",
    gravity: 1,
    })
    
    
    //ball
const ball = new Element({
    x: 650 /2,
    y: 400 /2
    width: 15,
    height: 15,
    color: "#20C20E", 
    speed: 1,
    gravity: 1,
    })
    
    //Player one score text

    //Player two score text

    //draw elements
function drawElement(element) {
    context.fillStyle = element.color;
    context.fillRect(element.x, element.y, element.width, element.height);
    }

    //detect collision

