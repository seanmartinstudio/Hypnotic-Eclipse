//Hypnotic eclipse

//Circle size
let circle1 = 200;
let circle2 = 100;
//X,Y
let x1 = 400;
let x2 = 400;
let y1 = 400;
let y2 = 400;
//RGB
let backgroundR = 255;
let backgroundB = 255;
let R1 = 0;
let G1 = 0;
let B1 = 255;

function setup() {
  createCanvas(800, 800);
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySun', 10);
  }
}

function draw() {
    background (backgroundR, 0, backgroundB);
  noStroke();
  fill(255, 255, 0);
  //circle is yellow
  circle(x1, y1, circle1);
  fill(R1, G1, B1);
  //cirlce is cyan
  circle(x2, y2, circle2);
  
  circle1 = circle1+1;
  circle2 = circle2+1.3;
  
  if(circle1<circle2) {
    backgroundR = backgroundR - 1;
    backgroundB = backgroundB - 1;
    R1 = R1 + 1;
    G1 = G1 + 1;
    B1 = B1 - 1;
  } 
}