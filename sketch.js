
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;//our artificial game world

var ground_options={
  isStatic:true
}

ground = Bodies.rectangle(200,380,400,20,ground_options)
World.add(world,ground); 

var ball_options={
  restitution:2.0
}
ball =Bodies.circle(300,200,30,ball_options);
World.add(world,ball);


}

function draw() 
{
  background(51);
  Engine.update(engine)
  ellipseMode(RADIUS)
  fill("red");
 ellipse(ball.position.x,ball.position.y,30);
 rectMode(CENTER)
 fill("brown")

 rect(ground.position.x,ground.position.y,400,20);
 
 
}

