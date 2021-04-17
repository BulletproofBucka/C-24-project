var paper,ground,d1,d2,d3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,600,50);
ground = new Ground(600,height,1200,20);
d1 = new Dustbin(600,680,200,20);
d2 = new Dustbin(500,615,20,150);
d3= new Dustbin(700,615,20,150);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  d1.display();
  d2.display();
  d3.display();
  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400})
}
}



