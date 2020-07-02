var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var chain, chain2, chain3;
var Bob, Bob2, Bob3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	bobDiameter=40;

	Bob=new bob(100,300,bobDiameter);
	Bob2=new bob(130,300,bobDiameter);
	Bob3=new bob(160,300,bobDiameter);
	


	top1 = new Top(400,300,400,20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	chain=new Chain(Bob.body,top1.body,-bobDiameter*2, 0)

	chain2=new Chain(Bob2.body,top1.body,-bobDiameter*1, 0)
	chain3=new Chain(Bob3.body,top1.body,0, 0)


	Engine.run(engine);
  
}


function draw() {
  
  background(120);
  top1.display();
  Bob.display();
  Bob2.display();
  Bob3.display();
  chain.display();
  chain2.display();
  chain3.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Bob.body,Bob.body.position,{x:-50,y:-45});

	}
}
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	TopBodyPosition=constraint.bodyB.position

	TopBodyOffset=constraint.pointB;
	
	TopBodyX=TopBodyPosition.x+TopBodyOffset.x
	TopBodyY=TopBodyPosition.y+TopBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, TopBodyX,TopBodyY);
}


