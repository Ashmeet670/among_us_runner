var gameState = 3

var background1 , backgroundImage
var player , playerImage , player_dead


var score = 0
var startButton , startButtonImage , overStartButton
var wall1 , wall2


var imposterSeen
var imposterGroup
var imposter1 , imposter2 , imposter3 , imposter4 , imposter5 , imposter6 , imposter7 , imposter8 , imposter9 , imposter10

function preload(){
  backgroundImage = loadImage("background.png")
  playerImage = loadImage("Cyan_player.png")
  player_dead = loadImage("deadPlayer.png")
  
  startButtonImage = loadImage("startbutton.png")
  
  imposter1 = loadImage("imposter1.png")
  imposter2 = loadImage("imposter2.png")
  imposter3 = loadImage("imposter3.png")
  imposter4 = loadImage("imposter4.png")
  imposter5 = loadImage("imposter5.png")
  imposter6 = loadImage("imposter6.png")
  imposter7 = loadImage("imposter7.png")
  imposter8 = loadImage("imposter8.png")
  imposter9 = loadImage("imposter9.png")
  imposter10 = loadImage("imposter10.png")
  imposterGroup = new Group()
}

function setup() {
  createCanvas(550, 500);
  
  background1 = createSprite(170, 90, 10 , 10)
  background1.addImage(backgroundImage)
  background1.scale = 0.7
  
  player = createSprite(150,450,10,10)
  player.addImage(player_dead)
  player.addImage(playerImage)
  player.setCollider("rectangle",0,0,60,80,0)
  
  wall1 = createSprite(6,10,10,1000)
  wall1.shapeColor = "black"
  wall2 = createSprite(300,10,10,1000)
  wall2.shapeColor = "black"
  
  
  
}

function draw() {
  background("lightblue");
  
  
  
  player.collide(wall1);
  player.collide(wall2);
  
  if(gameState === 3){
    
    textSize(30)
  stroke(30)
  fill("black")
  text("Rules",400,50)
  
  textSize(15)
  text("The people comign from the front",320,100)
  text("are the imposters. Dodge them by moving ",320,120)
  text("left and right with the arrow keys.",320,140)
  text("If they touch you then they will ",320,200)
  text("finish you and the game will get",320,220)
  text("over. So try to stay as far as ",320,240)
  text("possible from the imposters",320,260)
  text("Score will be shown below: ",320,300)
  
    
    startButton = createSprite(420,440,120,50)
    startButton.addImage(startButtonImage)
    startButton.scale = 0.21
    
    if(mousePressedOver(startButton)){
      gameState = 1
      overStartButton= createSprite(420,440,200,200)
      overStartButton.shapeColor = "lightblue"
    }
  }
  
  if(gameState === 1){
    
    
    textSize(20)
    fill("black")
    text("Score: " + score,380,200)
    
    if(imposterGroup.isTouching(player)){
      gameState = 2
    }
    
    if( frameCount % 40 === 0){
      score = score + 1
    }
    
    
    background1.velocityY = -2
    
    if (background1.y === 50){
      background1.y = 200
    }
    
    if(keyDown(LEFT_ARROW)){
      player.x = player.x  - 6
    }
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x  + 6
    }
    
    spawnImposter()
  }
  
  if (gameState === 2){
    background1.velocityY = 0
    imposterGroup.setVelocityXEach(0)
    player.addImage(player_dead)
    player.scale = 0.3
    
    fill("black")
    textSize(30)
    text("You Died",360,200)
    
    textSize(16)
    text("I told you to stay far from them!",320,260)
  }
  
  
  
  drawSprites()
}

function spawnImposter(){
  if(frameCount % 60 === 0){
    var imposternum = Math.round(random(1,10))
    imposterSeen = createSprite(150,-20,20,20)
    imposterSeen.x = Math.round(random(30,290))
    imposterSeen.velocityY = 4
    imposterSeen.scale = 1.1
    imposterSeen.lifetime = 140
    
    switch(imposternum){
      case 1: imposterSeen.addImage(imposter1);
        break;
      case 2: imposterSeen.addImage(imposter2);
        break;
      case 3: imposterSeen.addImage(imposter3);
        break;
      case 4: imposterSeen.addImage(imposter4);
        break;
      case 5: imposterSeen.addImage(imposter5);
        break;
      case 6: imposterSeen.addImage(imposter6);
        break;
      case 7: imposterSeen.addImage(imposter7);
        break;
      case 8: imposterSeen.addImage(imposter8);
        break;
      case 9: imposterSeen.addImage(imposter9);
        break;
      case 10: imposterSeen.addImage(imposter10);
        break;
    }
    imposterGroup.add(imposterSeen)
    
                                 
  }
}

