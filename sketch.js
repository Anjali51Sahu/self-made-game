var kid2IMG,kidIMG,glassIMG,groundIMG,trackIMG,carIMG, explosionIMG;
var canvas;
var glass,kid,kid2,car;
var track;

function preload(){
kid2IMG=loadImage("kid2.png");
kidIMG=loadImage("kid.png");
groundImg=loadImage("ground.png");
trackIMG=loadImage("track.png");
glassIMG=loadImage("broken_glass.png")
carIMG=loadImage("car3.png");
///explosionIMG.loadImage("explosion.png")
    
}

function setup(){
  createCanvas(displayWidth - 20, displayHeight-30);


// track=createSprite(displayWidth - 20, displayHeight-30);
// track.addImage(trackIMG);

// track1=createSprite(displayWidth/4,displayHeight-180);
// track1.addImage(trackIMG);

//track2=createSprite(displayWidth/4,displayHeight-360);
//track2.addImage(trackIMG);


car=createSprite(displayWidth/4,displayHeight, 50,50);
car.addImage(carIMG);

// invisbarrier=createSprite(100,displayHeight/2,2,1000);
// invisbarrier.visible=false

// invisbarrier2=createSprite(695,displayHeight/2,2,1000);
// invisbarrier2.visible=false

// kid1=createSprite(random(0,displayWidth),car.x+500,10,10);
// kid1.addImage(kidIMG);

// kid2=createSprite(10,12,12,12);
// kid2.addImage(kid2IMG);

// glass=createSprite(12,12,12,12);
// glass.addImage(glassIMG);


}

function draw(){
 background("white")   
 image(trackIMG, 0,0,displayWidth/2, displayHeight*2);
 image(trackIMG, 0,-displayHeight*2,displayWidth/2, displayHeight*2);
  image(trackIMG, 0,-displayHeight*4,displayWidth/2, displayHeight*2);
  image(trackIMG, 0,-displayHeight*6,displayWidth/2, displayHeight*2);
  image(trackIMG, 0,-displayHeight*8,displayWidth/2, displayHeight*2);
  image(trackIMG, 0,-displayHeight*10,displayWidth/2, displayHeight*2);
 //track.velocityY=5;
 //track1.velocityY=5;
 //track2.velocityY=5;
// image(trackIMG,0,-displayHeight*4,displayWidth/2,displayHeight*5);

//make the track move

//if(track.y>800){
//track.y=1
//}
//if(track1.y>800){
  //  track1.y=1
   // }
car.velocityY=-5  
  //  if(track2.y>800){
   //     track2.y=1
    //    }

// kid1.velocityY=5

   //make the car move
   if(keyDown(LEFT_ARROW)){
    car.x=car.x-5
   }
   if(keyDown(RIGHT_ARROW)){
        car.x=car.x+5
} 
 camera.position.y=car.y;
             

// car.bounceOff(invisbarrier);
// car.bounceOff(invisbarrier2);
spawnKid();
drawSprites();
}   

function spawnKid(){
var randomNumber = Math.round(random(1,3))
if(World.frameCount%30 ===0){
var obstacle = createSprite(random(200,displayWidth/2-100), camera.position.y -(random(100,300)))
switch(randomNumber){
  case 1: obstacle.addImage(kidIMG)
  break;
  case 2: obstacle.addImage(kid2IMG)
  break;
  case 3: obstacle.addImage(glassIMG)
  break;
}
obstacle.scale=0.1
}
}


