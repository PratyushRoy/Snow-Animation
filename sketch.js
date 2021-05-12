const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg

var boy
var snowman
var sling
var snowball
var ground
var gift
var score

function preload(){
backgroundImg=loadImage("snow2.jpg")

boy=loadImage("boy.png")



}

function setup() {
  createCanvas(1365,625);
  engine = Engine.create();
    world = engine.world;
    
   
    snowman=new Snowman(1200,10,300,300)
    snowball=new Snowball(400,330,30,30)
    sling=new Sling(snowball.body,{x:400, y:450})
    ground=new Ground(670,620,1400,30)


}

function draw() {
  background(backgroundImg)
  Engine.update(engine);
 
  image(boy ,360,400,150,200);
 
 
  snowman.display()
  sling.display()
  snowball.display()
  ground.display()
  
 
  
  
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(snowball.body,{x:mouseX, y:mouseY})
 
  }

  function mouseReleased(){
    sling.fly()
  }

  function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(snowball.body,{x:400, y:330})
    sling.attach(snowball.body)
    }
  }

  

 

  

 