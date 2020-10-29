class Obstacle{
    constructor(){

    }

    display(){
        if(frameCount % 30 === 0) {
            obstacle = createSprite(random(10, 2400), 300, 30, 70);
            obstacle.velocityY = 6;
            obstacle.shapeColor = "red";
          }
               
    }
    
}
