let x = 0;
let y = 0;
let score = 0;

function setup() {
  createCanvas(750, 750);
  drawGrid();
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
}

function moleClicked(){
}

function goodMole(){
}

function badMole(){
}
