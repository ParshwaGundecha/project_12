var garden,gardenImg;
var rabbit,rabbitImg;
var apples,appleImg;
var leaves,leavesImg;
var select_leaves;
var selectsprite;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
  leavesImg1 = loadImage("orangeLeaf.png");
  leavesImg2 = loadImage("redimage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(210,300,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;


}


function draw() {
  background("white");
  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  selectsprite=Math.round(random(1,2));
  
  if(frameCount%80===0){

  if(selectsprite==1){
   createApples();
  }
  else if(selectsprite==2){
    createLeaves();
  }
  }
drawSprites();
}

function createApples(){
  apples=createSprite(random(50,350),40,10,10)
  apples.addImage(appleImg);
  apples.scale=0.09;
  apples.velocityY=3;
  apples.lifetime=200
}


function createLeaves(){
  select_leaves=Math.round(random(1,3));
  leaves=createSprite(Math.round(random(50,350)),40,10,10);
  if(select_leaves==1){
    leaves.addImage(leavesImg);
  }
  else if(select_leaves==2){
    leaves.addImage(leavesImg1);
  }
  else if(select_leaves==3){
    leaves.addImage(leavesImg2)
  }
  leaves.scale=0.09;
  leaves.velocityY=3;
  leaves.lifetime=200;
  
  }
  
  
  
  
