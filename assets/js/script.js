const canvas = document.getElemantById("pongGame");
const context = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 550;

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
    
    
})