class Game {
  constructor(){

  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value")
      if (playerCountRef.exists) {
        playerCount = playerCountRef.val()
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
    run1=createSprite(200,200);
    run2=createSprite(500,200);
    runners = [run1,run2];
  }

  play(){
    form.hide();

    obstacle = new Obstacle();
    obstacle.display();

    coins = new Coins();
    coins.display();
    
    Player.getPlayerInfo();
    if (allPlayers !== undefined) {
      var index = 0
      var x=500;
      var y;
      //var display_position = 130
      for(var plr in allPlayers){
        index = index+1;
        x=x+200;
        y=displayHeight-allPlayers[plr].distance
        runners[index-1].x=x
        runners[index-1].y=y

        if (index===player.index) {
          runners[index-1].shapeColor = "blue"
          camera.position.x = displayWidth/2;
          camera.position.y = runners[index-1].y;
        }
      }


        
      }
    
    if (keyIsDown(LEFT_ARROW) && player.index !== null) {
      player.velocityX = -5
      player.update()
    }
    
    if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
      player.velocityX = +5
      player.update()
    }

    drawSprites();
  }
}
