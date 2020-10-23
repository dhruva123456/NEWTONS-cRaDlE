
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;
var bg
function preload()
{
	bg =loadImage("img.jpg");
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;
	var posX = width/2;
	var posY = height/5 + 250;
	roof = new Roof(width/2, height/4,430, 30);
	bob1 = new Bob(posX - bobDiameter*3.8, posY, bobDiameter);
	bob2 = new Bob(posX - bobDiameter*2,posY, bobDiameter);
	bob3 = new Bob(posX-bobDiameter*0.2,posY,bobDiameter*0.2);
	bob4 = new Bob(posX +  bobDiameter*1.5, posY, bobDiameter);
	bob5 = new Bob(posX + bobDiameter * 3.3, posY, bobDiameter);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*3.8,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0.2,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1.5,0); 
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*3.3,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === LEFT_ARROW) 
	{ 
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-259,y:-129});
		bob2.isStatic=true;
		bob3.isStatic=true;
		bob4.isStatic=true;
	} 
	
}