
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeObject, stoneObject, groundObject,boyImage, gameState, slingshot;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload()
{
	boyImage = loadImage("boy.png");	
}

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	treeObject = new tree(750, 400, 400, 400);
	groundObject = new ground(500, 600, 1000, 50);
	stoneObject = new stone(90, 465, 50);
	slingshot = new slingShot(stoneObject.body,{x:90, y:465});

	mango1 = new mango(635, 335, 40);
	mango2 = new mango(675, 275, 40);
	mango3 = new mango(700, 350, 40);
	mango4 = new mango(725, 300, 40);
	mango5 = new mango(775, 255, 40);
    mango6 = new mango(785, 298, 40);
    mango7 = new mango(800, 336, 40);
	mango8 = new mango(830, 265, 40);
	mango9 = new mango(850, 335, 40);
	mango10 = new mango(900,334, 40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,206,250);
  groundObject.display();
  treeObject.display();
  image(boyImage, 50, 405, 200, 250);
  stoneObject.display();
  slingshot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stoneObject, mango1);
  detectCollision(stoneObject, mango2);
  detectCollision(stoneObject, mango3);
  detectCollision(stoneObject, mango4);
  detectCollision(stoneObject, mango5);
  detectCollision(stoneObject, mango6);
  detectCollision(stoneObject, mango7);
  detectCollision(stoneObject, mango8);
  detectCollision(stoneObject, mango9);
  detectCollision(stoneObject, mango10);

  drawSprites();
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(stoneObject.body,{x: 235, y: 420});
        slingshot.attach(stoneObject.body);
    }
}

function mouseDragged(){
    if (gameState !== "Launch"){
        Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "Launch";
}

function detectCollision(stonePara, mangoPara){
    mangoBodyPosition = mangoPara.body.position;
    stoneBodyPosition = stonePara.body.position;

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.x, mangoBodyPosition.y);
    if (distance <= mangoPara.radius+stonePara.radius){
        Matter.Body.setStatic(mangoPara.body.false);
        console.log(true);
    } else {
        //console.log(distance);
    }
}


