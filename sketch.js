//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinimage


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world
	
	box1=new Boxes(600,680,200,20);
	box2=new Boxes(500,640,20,100);
	box3=new Boxes(720,640,20,100);
	ground=new Ground(400,height,800,20)
	paper=new Paperclass(50,500)
	
  }


function draw() {
	Engine.update(engine)
  background("yellow");
  box1.display();
  box2.display();
  box3.display();
ground.display();
 paper.display();
 

}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
Matter.Body.applyForce(paper.body, paper.body.position, {x:800, y:-800})
}

}

