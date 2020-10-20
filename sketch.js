const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var  boy
var mango1,mango2,mango3,mango4,mango5
var stone
var hand


function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(100,590,100,150)
  mango1= new Mango(670,500,20,20)
  mango2= new Mango(630,500,20,20)
  mango3= new Mango(710,500,20,20)
  mango4= new Mango(750,500,20,20)
  mango5= new Mango(670,460,20,20)
  tree1 = new Tree(700,530,200,200)
  ground = new Ground(400,620,800,10)
  stone = new Stone(70,550,30,30)
  hand = new Hand(stone,boy)

Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine); 
  background(200);
  ground.display();
  tree1.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  hand.display();
  drawSprites();
 
}

/* this code is written by Abhishek 
so you can make any changes to this code 
and if you want do this type of coding you 
should try whitehat.jr i have learned these type 
of coding you can try whitehat.jr it is a face to face teaching
so students and teacher can have better understanding*/
/*so getting to the point 
you can read the code in each tab you will know all the functioning in that*/



