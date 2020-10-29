var canvas, backgroundImage;
var allPlayers;
var run1,run2;
var runners=[];

var obstacle, coins, life;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

function setup(){
  canvas = createCanvas(displayWidth-30,displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount === 2) {
    game.update(1)
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
}
