const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;
var basket,basketImage;

function preload(){
	basketImage = loadImage("basket.png");
}


function setup() {
	createCanvas(1280, 580);


	engine = Engine.create();
	world = engine.world;

basket = createSprite(400,500,50,50);
basket.addImage(basketImage);
basket.scale=0.25;

	stone = new Stone(210,400,20);
	mango1 = new Mango(1050,200,30);
	mango2 = new Mango(1010,110,30);
	mango3 = new Mango(1090,81,30);
	mango4 = new Mango(940,220,30);
	mango5 = new Mango(1150,209,30);
	mango6 = new Mango(1220,150,30);
  mango7 = new Mango(1250,260,30);
  tree = new Tree(1070,580);
  ground = new Ground(0,570,4000,20);
	boy = new Boy(170,475);
	chain = new Chain(stone.body,{x:82, y:385});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  background("lightblue")
  fill('red');
  textSize(23);
  text("PRESS SPACE BAR TO GET A SECOND CHANCE TO PLAY!!!", 100,100);




  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);




  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
   chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}

