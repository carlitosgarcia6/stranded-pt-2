var apple, appleImage;
var arrow, arrowImage;
var axe, axeImage;
var backGround, backGroundImage;
var bow, bowImage;
var bread, breadImage;
var log, logImage;
var survivalKnife, survivalKnifeImage;
var survivalist, survivalistImage;
var tree, treeImage;
var tribalPeople, tribalPeopleImage;
var villageHouse, villageHouseImage;



function preload(){
  appleImage = loadImage("apple.png");
  arrowImage = loadImage("arrow.png");
  axeImage = loadImage("axe.png");
  backGroundImage = loadImage("background.jpg");
  bowImage = loadImage("bow.png");
  breadImage = loadImage("bread.png");
  logImage = loadImage("log.png");
  survivalKnifeImage = loadImage("survival knife.png");
  survivalistImage = loadImage("survivalist.png");
  treeImage = loadImage("tree.png");

}



















function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(0,0,0);  
  drawSprites();
}