
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  IronmanImg = loadImage("images/iron.png");
  StoneImage = loadImage("images/stone.png")
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.velocityY=3
  bg.addImage(backgroundImg)

  Ironman=createSprite(300,300,30,30)
  Ironman.addImage(IronmanImg)
  Ironman.scale=0.3
 
  ground = createSprite(200,585,400,10);
 
  ground.visible = false;
  StoneGroup=new Group()
 
}

function draw() {
  if(bg.y>370)
  {
    bg.y=bg.height/3.5;
  }

  generateStone();
  

  drawSprites();
   
}

function generateStone(){
  if(frameCount% 70 == 0){
    var Stone =createSprite(1200,120,40,10);
    Stone.x=random(50,950);
    Stone.addImage(StoneImage);
    Stone.scale=0.5;
    Stone.velocityY = 5;

    Stone.lifetime=250;
    StoneGroup.add(Stone);
  }
}

