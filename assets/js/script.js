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
    color: "#fff",
    gravity: 2,
    });
    //second paddle

    //ball
    const ball = new Element({
        x: 650 /2,
        y: 400 /2

    })
    //Player one score text

    //Player two score text

    //draw elements
    function drawElement(element) {


    }

    //detect collision

