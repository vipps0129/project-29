const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(500,360,20,30);
  box2 = new BlueBox(520,360,20,30);
  box3 = new BlueBox(540,360,20,30);
  box4 = new BlueBox(560,360,20,30);
  box5 = new BlueBox(580,360,20,30);
  box6 = new BlueBox(600,360,20,30);

  box7 = new RedBox(510,330,30,30);
  box8 = new RedBox(530,330,30,30);
  box9 = new RedBox(550,330,30,30);
  box10 = new RedBox(570,330,30,30);
  box11 = new RedBox(590,330,30,30);

  box12 = new YellowBox(520,310,30,30);
  box13 = new YellowBox(540,310,30,30);
  box14 = new YellowBox(560,310,30,30);
  box15 = new YellowBox(580,310,30,30);

  box16 = new GreenBox(530,280,30,30);
  box17 = new GreenBox(550,280,30,30);
  box18 = new GreenBox(570,280,30,30);

  box19 = new RedBox(540,250,30,30);
  box20 = new RedBox(560,250,30,30);

  box21 = new GreenBox(550,220,30,30);

  box22 = new BlueBox(500,135,30,30);
  box23 = new BlueBox(520,135,30,30);
  box24 = new BlueBox(540,135,30,30);
  box25 = new BlueBox(560,135,30,30);
  box26 = new BlueBox(580,135,30,30);
  box27 = new BlueBox(600,135,30,30);

  box28 = new YellowBox(510,105,30,30);
  box29 = new YellowBox(530,105,30,30);
  box30 = new YellowBox(550,105,30,30);
  box31 = new YellowBox(570,105,30,30);
  box32 = new YellowBox(590,105,30,30);

  box33 = new GreenBox(520,75,30,30);
  box34 = new GreenBox(540,75,30,30);
  box35 = new GreenBox(560,75,30,30);
  box36 = new GreenBox(580,75,30,30);
  
  box37 = new RedBox(530,45,30,30);
  box38 = new RedBox(550,45,30,30);
  box39 = new RedBox(570,45,30,30);

  ball = new Ball(0,0,50);

  spring = new Projectile(ball.body,{x:200,y:200});

  ground = new Platform(400,390,800,20);

  groundHovering = new Platform(550,160,200,20);
  
}

function draw() {
  background(0);
  Engine.update(engine);  

  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();
  
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display();

  box37.display();
  box38.display();
  box39.display();

  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();

  textSize(20)
  fill(255)
  text("DRAG and LEAVE to throw",50,100)
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}  