var canvas;
//PC
var Marc,Ben;
//NPC
var tiger,bear,ants,snakes,bananas,Rocks, Mushroom,Treasure,Crabs;
//score
var score=0;
//background
var bg;
//NPC images
var tigerimg, antimg, bananaimg, bearimg, crabimg, coinimg, mushroomimg, rockimg, snakeimg;

function preload() {
  bg = loadImage("./assets/BG.png");
tigerimg=loadImage("./assets/tiger.png");
antimg=loadImage("./assets/ant.jpg");
bananaimg=loadImage("./assets/banana.png");
bearimg=loadImage("./assets/bear.png");
crabimg=loadImage("./assets/crab.png");
coinimg=loadImage("./assets/goldcoin.png");
mushroomimg=loadImage("./assets/mushroom.png");
rockimg=loadImage("./assets/rock.png");
snakeimg=loadImage("./assets/snake.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
}

  


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(bg);
  
  form = new Form();
    form.display();

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}
