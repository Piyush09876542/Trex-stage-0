
var trex ,trex_running;
var ground
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,180,20,50); 
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;
  trex.x=100
  ground=createSprite(200,180,400,20);
}

function draw(){
  background("white")
  if(keyDown("space")){
  trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+1
  trex.collide(ground)
  drawSprites();
  

}
