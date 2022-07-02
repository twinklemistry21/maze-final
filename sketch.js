const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg,forms,logo,games,player1,player2;
var score=0;
var player, players;
var playerCount, gameState;
var man,child;
var allPlayers;
var edge1,edge2,edge3,edge4,edge5,edge6,edge7,edge8,edge9,edge10,edge11,edge12,edge13,edge14,edge15;
var edge16,edge17,edge18,edge19,edge20,edge21,edge22,edge23,edge24,edge25,edge26,edge27,edge28,edge29,edge30;
var edge31,edge32,edge33,edge34,edge35,edge36,edge37,edge38,edge39,edge40,edge41,edge42,edge43,edge44,edge45,edge46,edge47;
var edgegroup;
var index;

function preload() 
{
  //logo = loadImage("/1-1.jpg");
  bg = loadImage("bg.jpg");
  player1 = loadImage("nam.png");
  player2 = loadImage("child.png");
  maze = loadImage("maze.jpg");
}

function setup() 
{
  //engine = Engine.create();
  //world = engine.world;
  createCanvas(displayWidth-20, displayHeight-160);
  database = firebase.database();

  games = new Game();
  games.getState();
  games.start();

  
  
}

function draw()
{
  //Engine.update(engine);
  background(bg);
  textSize(30);
  fill("white");

  if (playerCount === 2) {
    games.update(1);
  }

  if (gameState === 1) {
    games.play();
  }

  if (gameState === 2) {
   // game.showLeaderboard();
    game.end();
  }

    

  //text("Maze Mania", 450, 50);

  //drawSprites();
}