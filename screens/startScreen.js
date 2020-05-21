import Button from "../button.js";
import { setCurrentScreen, mainFont, mainFontDif } from "../sketch.js";

export default function () {
  push();
  gradient(topColor, bottomColor);
  fill(0);
  textSize(100);
  //text("START", width / 2, height / 2);
  startButton.display();
  pop();
}

class StartButton extends Button {
  constructor(xOffset, y) {
    super(xOffset, y, 240, 100);
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
    fill(255);
    textAlign(CENTER);
    textSize(190);
    //text("KNIFFEL", this.x + 10, this.y - 193);
    fill(255);
    textFont(mainFontDif);

    text("KNIFFEL", this.x, this.y - 160);
    fill(242, 150, 181);
    textFont(mainFont);
    textSize(30);
    text("start game", this.x, this.y - 5);

    pop();
  }

  clicked() {
    setCurrentScreen("game");
  }
}

export let startButton = new StartButton(0, (windowHeight / 4) * 2.4);

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
