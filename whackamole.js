//Our variables and setting up the code.

let x = 00;
let y = 00;
let score = 0;
let goodMoleClicked;
let badMoleClicked;
let timer = 15;
let grid = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
let boxClicked;
let gMole;
let bMole;
let grandomx; 
let grandomy; 
let brandomx;
let brandomy;
let highScore = 0;
let oldGMole;
let oldBMole;
let scoreLimiter = 0;

function mousePressed(){
  moleClicked();
  
}

function keyPressed(){
  if(timer == 0){
    if(keyCode == ENTER){
      timer = 15;
      score = 0;
    }
  }
}

function setup() {
  createCanvas(750, 750);
  grandomx = int(random(0,3));
  grandomy = int(random(0,3));
  brandomx = int(random(0,3));
  brandomy = int(random(0,3));
}

//My code
function draw(){
 
  background(255);
  setupGame();
  x = 0;
  y = 0;
if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  
  }
 fill(0,0,0); 

  if (timer == 0) {
    background(255);
    fill(0,0,0);
    text("GAME OVER", width/2, height*0.5);
    text("SCORE: " + score, width/2, height/2 + 37.5);
    text("HIGH SCORE: " + highScore, width/2, height/2 + 75);
    text("PRESS ENTER TO RESTART", width/2, height/2 + 75 + 37.5);
    
    if(score > highScore){
      highScore = score;
    }
  }
  if(timer != 0){
  goodMole();
  badMole();
    fill(0,0,0);
    text("score: "  + score, width/2, height/2 + 75);
    text("time: " + timer, width/2, height/2);
}
  
  
}

function setupGame(){

  
  
  if(timer != 0){
    scoreTrack();
  }
  else{
    gMole = 0;
    bMole = 0;
  }
  
  drawGrid();
   
}

function drawGrid(){
  
  while(x <= width) {
    line(x,0,x,width);
    x = x + width/3;
  }
    while(y <= height){
    line(0,y,height,y);
    y = y + height/3;
    }
  line(width-1,0,width-1,height);
  line(0,height-1,width,height-1);
}

function scoreTrack(){
  if(gMole == boxClicked){
    for(let i = 0; i < 1; i++){
    score = score + 1;
     }
  }
  if(bMole == boxClicked){
    for(let i = 0; i < 1; i++){
    score = score - 3;
  }
  }
  //adjusts score based on what type of mole was clicked on
  if(score < 0){
    score = 0;
  }
  //prevents negative scores
  if (score > highScore){
    highscore = score;
  }
 boxClicked= 0;
}

//Partner's Code
function moleClicked(){
  for(i = 0; i < 3; i++){
    for(j = 0; j < 3; j++){
      if(int(mouseX / 250) == i && int(mouseY / 250) == j){
        boxClicked = grid[i][j];
        console.log(boxClicked);
      }
    }
  }
  newGoodMole();
  newBadMole();
}

function drawMoles(){
  rect(0,0,0,0);
}

function goodMole(){
  gMole = grid[grandomx][grandomy];
  fill(0, 255, 0);
  rect(grandomx * 250, grandomy *250, 250, 250);
}

function newGoodMole(){
  if(gMole == boxClicked || bMole == boxClicked){
    grandomx = int(random(0,3));
    grandomy = int(random(0,3));
    
  }
}

function badMole(){
  bMole = grid[brandomx][brandomy];
  if(bMole == gMole){
    brandomx = int(random(0,3));
    brandomy = int(random(0,3));
    bMole = grid[brandomx][brandomy];
  }
  fill(255,0,0);
  rect(brandomx * 250, brandomy * 250, 250, 250);
}

function newBadMole(){
  if(bMole == boxClicked || gMole == boxClicked){
    brandomx = int(random(0,3));
    brandomy = int(random(0,3));
    
  }
}
