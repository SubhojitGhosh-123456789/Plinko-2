const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score = 0;
var particle;
var turn = 0;
var line;
var line2;
var line3;
var logo;
var logo2;
var logo3;
var logo4;
var ground;
var gameState = "start";
var backgroundImg;
var currentTime;
var currentDate;
var turnLeft = 5;

function preload() {
  backgroundImg = loadImage("img.jpg");
}

function setup() {
  createCanvas(750,803);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(375,795,750,10);
  line = new Line(375,140,750,10);
  line2 = new Line(0,400,10,803);
  line3 = new Line(750,400,10,803);
  logo = new Logo(375,30);
  logo2 = new Logo2(130,100);
  logo3 = new Logo3(375,400);
  logo4 = new Logo4(375,400);

  for(var k = 20; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 15; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,220));
  }
  for(var j = 40; j <=width-5; j = j+50){
    plinkos.push(new Plinko(j,320));
  }
  for(var j = 15; j <=width-10; j = j+50){
    plinkos.push(new Plinko(j,420));
  }

}


function draw() {
  
  background(backgroundImg);

  Engine.update(engine);

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  if(particle!=null){

    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x<247){

        score=score+500;
        particle=null;
        if(turn>=5) gameState="end";
      
      }
    }
  }
  if(particle!=null){

    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x>250 && particle.body.position.x<487){

        score=score+100;
        particle=null;
        if(turn>=5) gameState="end";
      
      }
    }
  }
  if(particle!=null){

    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x>500 && particle.body.position.x<727){

        score=score+200;
        particle=null;
        if(turn>=5) gameState="end";
      
      }
    }
  }

  ground.display();
  logo.display();
  logo2.display();
  line.display();
  line2.display();
  line3.display();

  time();

  fill("white");

  textSize(25)
  text("Turns Left:  "+ turnLeft,540,120);

  textSize(25)
  text("Time:  "+ currentTime,540,60);

  textSize(25)
  text("Date:  "+ currentDate,540,30);

  textSize(40)
  text(": "+score,270,110);

  textSize(20)
  text("500",47,520);

  textSize(20)
  text("500",127,520);

  textSize(20)
  text("500",207,520);

  textSize(20)
  text("100",287,520);

  textSize(20)
  text("100",367,520);

  textSize(20)
  text("100",447,520);

  textSize(20)
  text("200",527,520);

  textSize(20)
  text("200",607,520);

  textSize(20)
  text("200",687,520);

  if(gameState ==="end"){
    logo3.display();
    textSize(30)
    text("Refresh the page to play again.",190,720);
  }
  if(gameState === "start"){
    logo4.display();
    fill(255);
    textSize(40)
    text("Press Space to Play The Game.",100,770);
  }

}
function mouseReleased(){
  if (gameState!=="end"){
      turnLeft--;
      turn++;
      particle = new Particle(mouseX, 150, 10, 10);
  }
}
async function time(){
  var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime  = responseJSON.datetime;
  var t = dateTime.slice(11,19);
  var d = dateTime.slice(0,10);

  currentDate = d;
  currentTime = t;

}
function keyPressed(){
  if(keyCode === 32){
     logo4.null();
     gameState="play";
  }
}