class Coins{
    constructor(){

    }

    display(){
        if(frameCount % 30 === 0){
            coins = createSprite(random(10,2400), 300, 20,20);
            coins.velocityY = 6;
            coins.shapeColor = "green";
        }
    }

}