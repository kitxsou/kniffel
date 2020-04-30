import Button from "./button.js";

export default class TableCell extends Button {
  constructor(x, y, dice) {
    super(x, y, 100, 50);
    this.dice = dice;
  }

  display() {
    rectMode(CENTER);
    stroke(54, 52, 53);
    fill(255);
    rect(this.x, this.y, this.width, this.height, 10);
    textAlign(CENTER);
  }

  calculateEyes() {
    let eyes = [0, 0, 0, 0, 0, 0];
    for (let currentDice of this.dice) {
      let value = currentDice.value;
      eyes[value - 1] += value;
    }
    console.log(eyes);
  }

  clicked() {
    this.calculateEyes();
  }
}
