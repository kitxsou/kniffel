import Button from "./button.js";
import { increaseCount, isEnabled } from "./screens/gameScreen.js";
import { myFont } from "../sketch.js";

export default class RollAllButton extends Button {
  constructor(x, y, width, height, title, dice) {
    super(x, y, width, height);

    this.title = title;
    this.dice = dice;
    this.alpha = 255;
  }

  display() {
    this.updatePosition();

    if (isEnabled()) {
      this.alpha = 255;
    } else {
      this.alpha = 100;
    }

    push();
    stroke(59, 50, 84, this.alpha);
    strokeWeight(8);
    rectMode(CENTER);
    fill(169, 191, 232, this.alpha);
    rect(this.x, this.y, this.width, this.height, 30);
    noStroke();
    fill(255, this.alpha);
    rect(this.x, this.y - 9, this.width - 13, this.height - 30, 25);
    fill(44, 37, 64, this.alpha);
    textAlign(CENTER);
    textFont(myFont);
    textSize(30);
    text(this.title, this.x, this.y);
    pop();
  }

  clicked() {
    if (isEnabled()) {
      for (var currentDice of this.dice) {
        if (currentDice.isActive) {
          currentDice.roll();
        }
      }
      increaseCount();
    }
  }
}
