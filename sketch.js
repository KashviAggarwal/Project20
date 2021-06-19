var bgImg,sleep,brush,gym,eat,drink ,move,bath;
var bg,astranaut;

 function preload(){
   bgImg = loadImage("img/iss.png");
   sleep= loadImage("img/sleep.png");
   brush = loadImage("img/brush.png");
   gym = loadAnimation("img/gym1.png","img/gym2.png","img/gym11.png","img/gym12.png");
   eat = loadAnimation("img/eat1.png","img/eat2.png");
   drink = loadAnimation("img/drink1.png","img/drink2.png");
   move = loadAnimation("img/move.png","img/move1.png");
   bath = loadAnimation("img/bath1.png","img/bath2.png");
 }

function setup() {
  createCanvas(800,400);
  


  bg =  createSprite(400, 200, 50, 50);
  bg.addImage("hj",bgImg);
  bg.scale = 0.2;

  astranaut = createSprite(300,230);
  astranaut.addAnimation("sleeping",sleep);
  astranaut.scale = 0.1;
  
}

function draw() {
  background(255,255,255);  
  edges = createEdgeSprites();
  astranaut.collide(edges)

  if(keyDown("UP_ARROW")){
    astranaut.addAnimation("brushing",brush);
    astranaut.changeAnimation("brushing");
    astranaut.y = 350;
    astranaut.velocityX = 0;
    astranaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astranaut.addAnimation("gymming",gym);
    astranaut.changeAnimation("gymming");
    astranaut.y = 350;
    astranaut.velocityX = 0;
    astranaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astranaut.addAnimation("eating",eat);
    astranaut.changeAnimation("eating");
    astranaut.y = 350;
    astranaut.velocityX = 0;
    astranaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astranaut.addAnimation("bathing",bath);
    astranaut.changeAnimation("bathing");
    astranaut.y = 350;
    astranaut.velocityY = 0;
    astranaut.velocityX = 0;
  }
  if(keyDown("m_key")){
    astranaut.addAnimation("moving",move);
    astranaut.changeAnimation("moving");
    astranaut.y = 350;
    astranaut.velocityY = 0;
    astranaut.velocityX = 0;
    }
  
  drawSprites();
  textSize(20);
  fill("white");
  text("Instructions :-",50,100);
  text("Up Arrow = Brushing",50,130);
  text("Down Arrow = Gymming",50,160);
  text("Left Arrow = Eating",50,190);
  text("Right Arrow = Bathing",50,220);
  text("M Key = Moving",50,250);
}