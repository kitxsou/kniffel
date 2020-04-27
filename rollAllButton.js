import Button from "./button";

export default class RollAllButton extends Button {
  constructor(x, y, width, height, title, dice) {
    super(x, y, width, height);

    this.title = title;
    this.dice = dice;
  }

  display() {
    stroke(54, 52, 53);
    strokeWeight(8);
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, this.width, this.height, 30);
    noStroke();
    fill(200);
    rect(this.x, this.y - 9, this.width - 13, this.height - 30, 25);
    fill(255);
    stroke(0);
    textAlign(CENTER);
    textSize(25);
    text(this.title, this.x, this.y);
  }

  clicked() {
    for (var currentDice of this.dice) {
      if (currentDice.isActive) {
        currentDice.roll();
      }
    }
  }
}
