import Button from "../button.js";
import { mainFont, mainFontDif } from "../sketch.js";
import { grandTotalSum } from "./gameScreen.js";

export default function () {
  push();
  fill(255);
  textSize(80);
  textAlign(CENTER);
  textFont(mainFontDif);
  text("Done! \n Final Score: " + grandTotalSum(), width / 2, height / 3);
  restartButton.display();
  pop();
}

export class RestartButton extends Button {
  constructor(xOffset, y) {
    super(xOffset, y, 240, 100);
  }

  displayInGame() {
    this.updatePosition();

    push();
    stroke(44, 37, 64);
    strokeWeight(8);
    rectMode(CENTER);
    fill(168, 216, 234);
    //rect(this.x, this.y, this.width, this.height, 30);
    noStroke();
    fill(214, 86, 101);
    //rect(this.x, this.y - 9, this.width - 13, this.height - 30, 25);
    //fill(219, 125, 204);
    textAlign(CENTER);
    textSize(40);
    textFont(mainFont);
    text("restart game", this.x, this.y);

    pop();
  }

  display() {
    this.updatePosition();

    push();

    background(46, 47, 105, 80);
    stroke(102, 79, 130);
    strokeWeight(8);
    rectMode(CENTER);
    fill(169, 191, 232);
    rect(this.x, this.y, this.width, this.height, 30);
    noStroke();
    fill(255);
    rect(this.x, this.y - 9, this.width - 13, this.height - 30, 25);
    fill(242, 150, 181);
    textAlign(CENTER);
    textSize(30);
    textFont(mainFont);
    text("restart game", this.x, this.y);

    pop();
  }

  clicked() {
    window.location.reload();
  }
}

export let restartButton = new RestartButton(0, (windowHeight / 4) * 2.4);
