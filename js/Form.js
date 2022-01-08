class Form {
  constructor() {
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/TITLE.png", "game title");
    this.story = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(150, 30);
    this.playButton.position(width / 2 - 90, height / 2 + 50 );
    this.story.position(width / 2 - 100, height / 2 + 50);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.playButton.class("customButton");
    this.story.class("greeting");
  }

  hide() {
    this.story.hide();
    this.playButton.hide();
   
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
     
      var message = `
      Stranded on an Island.
      </br>The world explorer - Marc, was travelling to America and suddenly during his journey the plane 
      </br>unfortunately gets crash landed on an island and he needs to survive the wild and
      </br>reach up to get some help on his way to home!...`;
      this.story.html(message);
      this.playButton.hide();
    });
    
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}