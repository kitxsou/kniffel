import Button from "./button.js";
import { clearCount } from "./screens/gameScreen.js";

export default class TableCell extends Button {
  constructor(x, y, dice, eyeNumber) {
    super(x, y, 35, 25);
    this.dice = dice;
    this.eyeNumber = eyeNumber;
    this.value = 0;
    this.isCrossed = false;
  }

  display() {
    this.updatePosition();

    push();
    rectMode(CENTER);
    //stroke(232, 223, 213);
    // stroke(44, 37, 64);
    //strokeWeight(6);

    if (this.canBeFilled()) {
      fill(169, 198, 245);
    } else {
      fill(245, 183, 166);
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
    text(this.eyeNumber, this.x - 230, this.y + 7);
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

    let newValue = 0;

    for (let currentDice of this.dice) {
      if (currentDice.value === this.eyeNumber) {
        newValue += this.eyeNumber;
      }
    }

    this.value = newValue;
    this.resetDice();
  }

  resetDice() {
    for (let currentDice of this.dice) {
      currentDice.value = -1;
      currentDice.isActive = true;
    }

    clearCount();
  }

  canBeFilled() {
    if (this.value !== 0) {
      return false;
    }

    for (let currentDice of this.dice) {
      if (currentDice.value === this.eyeNumber) {
        return true;
      }
    }
    return false;
  }
}
