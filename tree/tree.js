const LEG_WIDTH = 25;
const LEG_HEIGHT = 50;
const BODY_DIM = 100;
var speed = 0.5;

//left leg - (150, 200, 150, 400)

var topy1 = 200;
var topy2 = 300;
var bottomy1 = 300;
var bottomy2 = 400;

var leftx = 150;
var bottomleftx = 150;
var lefty = 400;

var isExpandTree = false;
function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(220);

    //leg
    //line(leftX1, leftY1, leftX2, leftY2);

    //top left leg
    
    //if (leftx > 0 && leftx < 400) {
        if (leftx >= 100 && isExpandTree == false) {
            leftx -= speed;
        }
        if (lefty >= 300 && isExpandTree == false) {
            lefty -= speed;
        } else {
            isExpandTree = true;
        }
        if (bottomleftx < 250 && isExpandTree == true) {
            bottomleftx += speed;
        }
    
    //}
    
    line(150, 200, leftx, 300);

    //bottom left leg
    line(leftx, 300, bottomleftx, lefty);


    //top right leg
    line(250, topy1, 250, topy2);
    //bottom right leg
    line(250, bottomy1, 250, bottomy2);


    //body
    rect(150, 100, BODY_DIM, BODY_DIM);
    
    
}