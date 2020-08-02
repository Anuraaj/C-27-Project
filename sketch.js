
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5, roof1,roof2,roof3,roof4,roof5,chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500; 
	bobDiameter = 40;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 

	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	roof1=new Roof(width/2,height/4,width/7,20);

	chain1=new Chain(bob1.body,roof1.body,-bobDiameter*2, 0) 
	chain2=new Chain(bob2.body,roof1.body,-bobDiameter*1, 0) 
	chain3=new Chain(bob3.body,roof1.body,0, 0) 
	chain4=new Chain(bob4.body,roof1.body,bobDiameter*1, 0) 
	chain5=new Chain(bob5.body,roof1.body,bobDiameter*2, 0)

	//Create the Bodies Here.
	//roof1 = new Roof(100,100,200,20);
	
	/*roof2 = new Roof(200,100,200,20);
	roof3 = new Roof(300,100,200,20);
	roof4 = new Roof(400,100,200,20);
	roof5 = new Roof(500,100,200,20);*/
	/*bob1 = new Bob(100,310,50);
	bob2 = new Bob(200,310,50);
	bob3 = new Bob(300,310,50);
	bob4 = new Bob(400,310,50);
	bob5 = new Bob(500,310,50)
	chain1 = new Chain(roof1.body,bob1.body);
	chain2 = new Chain(roof1.body,bob2.body);
	chain3 = new Chain(roof1.body,bob3.body);
	chain4 = new Chain(roof1.body,bob4.body);
	chain5 = new Chain(roof1.body,bob5.body);*/
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  chain1.display();
  chain2.display(); 
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  /*roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();*/
  drawSprites();
  
}
function keyPressed()
 {
	if (keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
	 }
	 if (keyCode === RIGHT_ARROW)
	   {
		   Matter.Body.applyForce(bob2.body,bob2.body.position,{x:50,y:-45}); 
		}
	 }



