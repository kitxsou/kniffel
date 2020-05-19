import Button from "../button.js";
import { setCurrentScreen } from "../sketch.js";

export default function () {
  push();
  fill(0);
  textSize(100);
  text("START", width / 2, height / 2);
  startButton.display();
  pop();
}

class StartButton extends Button {
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
    rect(this.x, this.y, this.width, this.height, 30);
    noStroke();
    fill(255);
    rect(this.x, this.y - 9, this.width - 13, this.height - 30, 25);
    fill(44, 37, 64);
    // stroke(0);
    textAlign(CENTER);
    textSize(30);
    text("start game", this.x, this.y);
    pop();
  }

  clicked() {
    setCurrentScreen("game");
  }
}

export let startButton = new StartButton(0, 500);
