const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//declare variables for ground,bridge,leftwall,rightwall,jointPoint & jointLink

//declare array of stones

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  //create ground 

  //create leftwall

  //create rightwall

  //create bridge

  //create jointPoint

  //add the bridgebody & jointPoint in MAtter.composite.add() // Hint2

  //create stones at random position using for loop // Hint 3

}

function draw() {
  background(51);
  Engine.update(engine);
// display ground,bridge,leftwall & rightwall

// loop to display stones
for(var stone of  stones){
  stone.show();
}

}
