import Button from "./button.js";
import { clearCount } from "./screens/gameScreen.js";

export class LowerTableCell extends Button {
  constructor(x, y, dice, title, canBeFilled, calculateValue) {
    super(x, y, 40, 25);
    this.dice = dice;
    this.value = 0;
    this.title = title;
    this.isCrossed = false;
    this.canBeFilled = canBeFilled;
    this.calculateValue = calculateValue;
  }

  display() {
    this.updatePosition();

    push();
    rectMode(CENTER);
    //stroke(232, 223, 213);
    // stroke(44, 37, 64);
    //strokeWeight(6);

    if (this.value === 0 && !this.isCrossed && this.canBeFilled()) {
      fill(185, 197, 240);
    } else {
      fill(245, 178, 159);
    }

    noStroke();
    rect(this.x, this.y, this.width, this.height, 7);
    fill(44, 37, 64);
    textAlign(CENTER);
    textSize(20);
    if (this.isCrossed) {
      text("-", this.x, this.y + 7);
    } else if (this.value === 0) {
      text(" ", this.x, this.y + 7);
    } else {
      text(this.value, this.x, this.y + 7);
    }
    //fill(56, 44, 41);
    textAlign(LEFT);
    fill(255);
    noStroke();
    textSize(20);
    text(this.title, this.x - 230, this.y + 7);
    pop();
  }

  clicked() {
    if (this.value !== 0) {
      this.isCrossed = true;
      this.resetDice();
      return;
    }

    if (!this.canBeFilled()) {
      return;
    }

    this.value = this.calculateValue();
    this.resetDice();
  }

  resetDice() {
    for (let currentDice of this.dice) {
      currentDice.value = -1;
      currentDice.isActive = true;
    }

    clearCount();
  }
}
