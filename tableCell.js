import Button from "./button.js";

export default class TableCell extends Button {
  constructor(x, y, dice, eyeNumber) {
    super(x, y, 50, 50);
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

    rect(this.x, this.y, this.width, this.height, 8);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    if (this.isCrossed) {
      text("-", this.x, this.y + 10);
    } else if (this.value === 0) {
      text(" ", this.x, this.y + 10);
    } else {
      text(this.value, this.x, this.y + 10);
    }
    //fill(56, 44, 41);
    fill(232, 223, 213);
    noStroke();
    textSize(40);
    text(this.eyeNumber, this.x - 100, this.y + 10);
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
