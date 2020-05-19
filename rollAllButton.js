import Button from "./button.js";
import { increaseCount } from "./screens/gameScreen.js";
import { myFont } from "../sketch.js";

export default class RollAllButton extends Button {
  constructor(x, y, width, height, title, dice) {
    super(x, y, width, height);

    this.title = title;
    this.dice = dice;
  }

  display() {
    this.updatePosition();

    push();
    stroke(44, 37, 64);
    strokeWeight(8);
    rectMode(CENTER);
    fill(168, 216, 234);
    rect(this.x, this.y, this.width, this.height, 30);
    noStroke();
    fill(255);
    rect(this.x, this.y - 9, this.width - 13, this.height - 30, 25);
    fill(44, 37, 64);
    textAlign(CENTER);
    textFont(myFont);
    textSize(30);
    text(this.title, this.x, this.y);
    pop();
  }

  clicked() {
    for (var currentDice of this.dice) {
      if (currentDice.isActive) {
        currentDice.roll();
      }
    }

    increaseCount();
  }
}
