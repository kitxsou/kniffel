import Button from "./button.js";

export default class BaseTableCell extends Button {
  constructor(x, y, title, calculateValue) {
    super(x, y, 40, 25);
    this.calculateValue = calculateValue;
    this.title = title;
  }

  display() {
    this.updatePosition();

    push();
    rectMode(CENTER);
    //stroke(232, 223, 213);
    // stroke(44, 37, 64);
    //strokeWeight(6);

    fill(232, 114, 128);

    noStroke();
    rect(this.x, this.y, this.width, this.height, 7);
    fill(44, 37, 64);
    textAlign(CENTER);
    textSize(20);

    text(this.calculateValue(), this.x, this.y + 7);

    //fill(56, 44, 41);
    textAlign(LEFT);
    fill(255);
    noStroke();
    textSize(20);
    text(this.title, this.x - 230, this.y + 7);
    pop();
  }
  clicked() {}
}
