let x = 00;
let y = 00;
let score = 0;
let goodMoleClicked;
let badMoleClicked;
let timer = 3;

function setup() {
  createCanvas(750, 750);
  
  setupGame();

}

function mousePressed(){

}

function setupGame(){

  
    drawGrid();
scoreAndTime();

}

function drawMoles(){
moleClicked();
goodMole();
badMole();
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

function scoreAndTime(){
  if(goodMoleClicked === true){
    score = score + 1;
     }
  if(badMoleClicked === true){
    score = score - 3
  }
  //adjusts score based on what type of mole was clicked on
  if(score < 0){
    score = 0;
  }
  //prevents negative scores
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }
}

function moleClicked(){
}

function goodMole(){
}

function badMole(){
}
