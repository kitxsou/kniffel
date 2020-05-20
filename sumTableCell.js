import Button from "./button.js";

export default class SumTableCell extends Button {
  constructor(x, y, tableCells) {
    super(x, y, 35, 25);
    this.tableCells = tableCells;
    this.title = "total score";
  }

  display() {
    this.updatePosition();

    push();
    rectMode(CENTER);
    //stroke(232, 223, 213);
    // stroke(44, 37, 64);
    //strokeWeight(6);

    fill(245, 183, 166);

    noStroke();
    rect(this.x, this.y, this.width, this.height, 7);
    fill(44, 37, 64);
    textAlign(CENTER);
    textSize(20);

    text(this.sumOfAllTableCells(), this.x, this.y + 7);

    //fill(56, 44, 41);
    textAlign(LEFT);
    fill(255);
    noStroke();
    textSize(20);
    text(this.title, this.x - 200, this.y + 7);
    pop();
  }

  clicked() {}

  sumOfAllTableCells() {
    let sum = 0;
    for (let currentTableCell of this.tableCells) {
      if (!currentTableCell.isCrossed) {
        sum += currentTableCell.value;
      }
    }
    return sum;
  }

  // sumWithBonus() {
  //   if (sum >= 63) {
  //     sum += 35;
  //   }
  // }
}
