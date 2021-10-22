var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11,maze12,maze13,maze14,maze15,maze16,maze17,maze18,maze19,maze20,maze21,maze22,maze23,maze24,maze25,maze26,maze27,maze28,maze29,maze30,maze31,maze32,maze33,maze34,maze35,maze36,maze37,maze38,maze39,maze40,maze41,maze42,maze43,maze44,maze45,maze46,maze47,maze48,maze49,maze50,maze51,maze52,maze53,maze54,maze55,maze56,maze57,maze58,maze59,maze60,maze61,maze62,maze63,maze64,maze65,maze66,maze67,maze68,maze69,maze70,maze71,maze72;
var life1 = 3,life2 = 3;
var player1,player2,player1Img,player2Img;
function preload()
{
  player1Img=loadImage("images/player1.png");
  player2Img=loadImage("images/player2.png");
}

function setup() {
  createCanvas(1100, 1000);
  player1 = createSprite(105,125,30,30);
  player1.addImage(player1Img);
  player1.scale = 0.15;
  player2 = createSprite(890,555,30,30);
  player2.addImage(player2Img);
  player2.scale = 0.15;
 maze1 = new Maze(500,80,800,10);
 maze2 = new Maze(500,600,800,10);
 maze3 = new Maze(105,380,10,430);
 maze4 = new Maze(895,300,10,430);
 maze5 = new Maze(180,140,50,10);
 maze6 = new Maze(200,180,10,72);
 maze7 = new Maze(200,220,100,10);
 maze8 = new Maze(155,243,10,50);
 maze9 = new Maze(130,263,50,10);
 maze10 = new Maze(280,125,10,90);
 maze11 = new Maze(300,173,50,10);
 maze12 = new Maze(370,125,100,10);
 maze13 = new Maze(365,170,10,100);
 maze14 = new Maze(365,220,100,10);
 maze15 = new Maze(420,240,10,50);
 maze16 = new Maze(310,265,10,100);
 maze17 = new Maze(260,270,100,10);
 maze18 = new Maze(205,315,10,100);
 maze19 = new Maze(425,105,10,50);
 maze20 = new Maze(180,315,50,10);
 maze21 = new Maze(135,380,50,10);
 maze22 = new Maze(500,130,50,10);
 maze23 = new Maze(525,130,10,100);
 maze24 = new Maze(550,175,50,10);
 maze25 = new Maze(580,195,10,50);
 maze26 = new Maze(450,175,50,10);
 maze27 = new Maze(475,195,10,50);
 maze28 = new Maze(495,225,50,10);
 maze29 = new Maze(525,295,10,150);
 maze30 = new Maze(500,275,50,10);
 maze31 = new Maze(495,365,50,10);
 maze32 = new Maze(465,345,10,50);
 maze33 = new Maze(410,325,100,10);
 maze34 = new Maze(360,325,10,100);
 maze35 = new Maze(330,370,50,10);
 maze36 = new Maze(845,450,100,10);
 maze37 = new Maze(865,330,50,10);
 maze38 = new Maze(835,350,10,50);
 maze40 = new Maze(630,105,10,50);
 maze41 = new Maze(670,160,50,10);
 maze42 = new Maze(700,180,10,50);
 maze43 = new Maze(720,210,50,10);
 maze44 = new Maze(750,230,10,50);
 maze45 = new Maze(795,260,100,10);
 maze46 = new Maze(800,285,10,50);
 maze47 = new Maze(745,305,100,10);
 maze48 = new Maze(690,285,10,50);
 maze49 = new Maze(740,330,10,50);
 maze50 = new Maze(550,330,50,10);
 maze51 = new Maze(630,285,10,100);
 maze52 = new Maze(800,130,100,10);
 maze53 = new Maze(800,180,10,100);
 maze54 = new Maze(165,400,10,50);
 maze55 = new Maze(210,430,100,10);
 maze55 = new Maze(265,410,10,50);
 maze56 = new Maze(215,480,10,100);
 maze57 = new Maze(260,535,100,10);
 maze58 = new Maze(315,515,10,50);
 maze59 = new Maze(345,495,50,10);
 maze60 = new Maze(375,475,10,50);
 maze61 = new Maze(395,450,50,10);
 maze62 = new Maze(425,520,10,150);
 maze63 = new Maze(490,460,10,100);
 maze64 = new Maze(515,505,50,10);
 maze65 = new Maze(540,505,10,50);
 maze66 = new Maze(585,480,100,10);
 maze67 = new Maze(580,535,10,120);
 maze68 = new Maze(805,370,50,10);
 maze69 = new Maze(675,395,10,100);
 maze70 = new Maze(630,530,100,10);
 maze71 = new Maze(740,570,10,50);
 maze72 = new Maze(795,550,100,10);
}

function draw() {
  background('white');  
  text(mouseX + "," + mouseY,50,50);
  textSize(40);
  fill("red");
  text("GAME ARENA",380,50);
  textSize(20);
  fill("black");
  text("PLAYER 1:" + life1,910,50);
  text("PLAYER 2:" + life2,910,100);
  if(keyDown("up"))
  {
   player2.y=player2.y-1;
  }
  if(keyDown("down"))
  {
   player2.y=player2.y+1;
  }
  if(keyDown("left"))
  {
   player2.x=player2.x-1;
  }
  if(keyDown("right"))
  {
   player2.x=player2.x+1;
  }
  
  



  drawSprites();
 
}

