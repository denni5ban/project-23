const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var player, playerBase;
var computerPlayer, computerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  
  engine = Engine.create();
  world = engine.world;
	
  playerBase = new PlayerBase(300, random(450, height-300), 180, 150);
  player = new Player(285, playerBase.position.y - 130, 50, 180);
  
  computerBase = new ComputerBase(1700,random(450, height-300), 180, 150)
  computerPlayer = new ComputerPlayer(1685, computerBase.position.y - 130, 50, 180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  computerBase.display();
  playerBase.display();
    
  computerPlayer.display();
  player.display();


}
