import Button from "./button.js";

export default class TableCell extends Button {
  constructor(x, y, dice, eyeNumber) {
    super(x, y, 100, 50);
    this.dice = dice;
    this.eyeNumber = eyeNumber;
    this.value = 0;
  }

  display() {
    this.updatePosition();

    rectMode(CENTER);
    stroke(44, 37, 64);
    strokeWeight(6);

    if (this.canBeFilled()) {
      fill(169, 198, 245);
    } else {
      fill(245, 183, 166);
    }
    rect(this.x, this.y, this.width, this.height, 10);
    textAlign(CENTER);
    text(this.value, this.x, this.y + 10);
  }

  clicked() {
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
