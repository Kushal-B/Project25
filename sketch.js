
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	line1 = new log(600, 630, 180, 20);
	line2 = new log(500,600,20,80);
	line3 = new log(700,600,20,80)

	groundSprite = createSprite(400,650,800,20)
	groundSprite.shapeColor = "yellow";


	var ground_options ={

		isStatic : true
	}

	ground = Bodies.rectangle(400,650,800,20, ground_options);
	World.add(world, ground);

	ball = new paperBall(100, 500, 15);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  drawSprites();
  
  line1.display();
  line2.display();
  line3.display();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x : 25, y : -55})

	}

}