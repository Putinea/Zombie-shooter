var bullets = 50
var gameState = "fight"
var lives = 3
var score = 0
function preload(){
background_img=loadImage("Background.jpeg")
zombie_img=loadImage("AI.2.png")
shooter_img=loadImage("shooter_1.png")
shooting_img=loadImage("shooter_3.png")
Heartsuno_img=loadImage("Hearts 1.png")
Heartsdua_img=loadImage("Hearts 2.png")
Heartstres_img=loadImage("hearts 3.png")
Bullet_img=loadImage("Bullet.png")
}




function setup() {
  createCanvas(windowWidth,windowHeight);
bground=createSprite(width/2,height/2,20,20)
bground.addImage(background_img)
bground.scale=0.99
shooter=createSprite(50,600,30,30)
shooter.addImage(shooter_img)
shooter.scale=0.6
zombieGroup=new Group()
hearts3=createSprite(1100,80,20,20)
hearts3.addImage(Heartstres_img)
hearts3.scale=3.0
bulletGroup=new Group()
hearts1=createSprite(1100,80,20,20)
hearts1.addImage(Heartsuno_img)
hearts1.scale=3.0
hearts1.visible=false
hearts2=createSprite(1100,80,20,20)
hearts2.addImage(Heartsdua_img)
hearts2.scale=3.0
hearts2.visible=false

}

function draw() {
  background(255,255,255);  
  drawSprites();
if(gameState=="fight"){
if(lives==3){
  hearts3.visible=true
  hearts2.visible=false
  hearts1.visible=false


}
if(lives==2){
  hearts3.visible=false
  hearts2.visible=true
  hearts1.visible=false
}
if(lives==1){
  hearts3.visible=false
  hearts2.visible=false
  hearts1.visible=true
}if(lives==0){
  gameState="lost"
}
if(score==100)
{gameState="win"}
  if(keyWentDown("space")){
  bullet=createSprite(shooter.x+160,shooter.y-50)
bullet.scale= 0.09
  bullet.addImage(Bullet_img)
bullet.velocityX=+10
bulletGroup.add(bullet)
 bullets=bullets-1  
shooter.addImage(shooting_img)
}
else if(keyWentUp("space")){
  shooter.addImage(shooter_img)
}

if(keyDown("RIGHT_ARROW")){
  shooter.x=shooter.x+3
}
if(keyDown("LEFT_ARROW")){
  shooter.x=shooter.x-3
}
if(keyDown("DOWN_ARROW")){
  shooter.y=shooter.y+3
}
if(keyDown("UP_ARROW")){
  shooter.y=shooter.y-3
}
if(zombieGroup.isTouching(bulletGroup)){
  for(var i=0;i<zombieGroup.length;i++){
    if(zombieGroup[i].isTouching(bulletGroup)){
      zombieGroup[i].destroy()
      bulletGroup.destroyEach()
   score=score+5
    }}
}
if(zombieGroup.isTouching(shooter)){
for(var i=0;i<zombieGroup.length;i++){
  if(zombieGroup[i].isTouching(shooter)){
    zombieGroup[i].destroy()
  lives=lives-1
  }
}
}
if(bullets==0){
  gameState="bullet"
}
spawnAi()

}
textSize(30)
fill("Brown")
text("Bullets="+bullets,1000,30)
fill("Red")
text("Lives="+lives,700,30)
fill("Yellow")
text("Score="+score,400,30)

if(gameState=="lost"){
  textSize(70)
  fill("Red")
  text("YOU LOST YOU SUCK",500,500)
  zombieGroup.destroyEach()
  shooter.destroy()
}
else if(gameState=="win"){
  textSize(70)
  fill("Green")
  text("YOU WIN CONGRATS NOW TRY BEATING YOUR FRIEND",200,500)
  zombieGroup.destroyEach()
  shooter.destroy()
}
else if(gameState=="bullet"){
  textSize(70)
  fill("Yellow")
  text("YOU RAN OUT OF BULLETS YOU SUCK",500,500)
  zombieGroup.destroyEach()
  shooter.destroy()
bulletGroup.destroyEach()
}


}
function spawnAi(){
 if(frameCount%50==0){ zombie=createSprite(random(600,1400),random(400,900),30,30)
  zombie.addImage(zombie_img)
  zombie.scale=1.6
zombie.velocityX=-3
zombieGroup.add(zombie) 
zombie.lifeTime=500
zombieGroup.add(zombie)
zombie.setCollider("rectangle",0,0,100,200)





}




}