class Form {
  constructor() {
    this.input = createInput("Enter Name");
    this.button = createButton('PLAY');
    this.greeting = createElement('h3');
    this.title = createElement('h2')
  }
  hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
  }
  display(){ 
    this.title.html("Soul Full Runner");
    this.title.position((displayWidth/2)-85, 0);
    
    this.input.position((displayWidth/2)-80, 160);
    this.button.position((displayWidth/2)-25, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("WELCOME TO THE GAME " + player.name )
      this.greeting.position((displayWidth/2)-160, (displayHeight/2)-50)
    });

  }
}
