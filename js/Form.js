class Formm {
  constructor() 
  {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./1-1.jpg", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() 
  {
    this.titleImg.position(400, 40);
    this.input.position(650,450);
    this.playButton.position(670,500);
    this.greeting.position(500, 450);
  }

  setElementsStyle() 
  {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() 
  {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.titleImg.hide();
  }

  handleMousePressed() 
  {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  display() 
  {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
