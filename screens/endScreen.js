import Button from "../button.js";
import { mainFont, mainFontDif } from "../sketch.js";
import { grandTotalSum } from "./gameScreen.js";

export default function () {
  push();
  gradient(topColor, bottomColor);
  fill(255);
  textSize(90);
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

let topColor = color(117, 143, 189); //87, 71, 67
let bottomColor = color(224, 146, 182);

function gradient(topColor, bottomColor) {
  push();
  var startColor = topColor;
  var endColor = bottomColor;
  var gradientX = 0; //
  var gradientY = 0; // rectangle of gradient box
  var w = width; //
  var h = height; //

  for (var i = gradientY; i <= gradientY + h; i = i + 1.0) {
    var gradientProgress = map(i, gradientY, gradientY + h, 0, 0.9);
    var gradientColor = lerpColor(startColor, endColor, gradientProgress);
    stroke(gradientColor);
    line(gradientX, i, gradientX + w, i);
  }
  pop();
}

export let restartButton = new RestartButton(0, (windowHeight / 4) * 2.4);
