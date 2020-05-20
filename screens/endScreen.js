import Button from "../button.js";
import { mainFont } from "../sketch.js";

export default function () {
  push();
  fill(0);
  textSize(100);
  text("END", width / 2, height / 2);
  restartButton.display();
  pop();
}

export class RestartButton extends Button {
  constructor(xOffset, y) {
    super(xOffset, y, 200, 100, 21, 21, 21);
  }

  display() {
    this.updatePosition();

    push();
    stroke(44, 37, 64);
    strokeWeight(8);
    rectMode(CENTER);
    fill(168, 216, 234);
    //rect(this.x, this.y, this.width, this.height, 30);
    noStroke();
    fill(255);
    //rect(this.x, this.y - 9, this.width - 13, this.height - 30, 25);
    //fill(219, 125, 204);
    textAlign(CENTER);
    textSize(40);
    textFont(mainFont);
    text("restart game", this.x, this.y);
    pop();
  }

  clicked() {
    window.location.reload();
  }
}

export let restartButton = new RestartButton(0, windowHeight / 2 - 50);
