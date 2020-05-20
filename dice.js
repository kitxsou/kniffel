import Button from "./button.js";
import { myFont } from "../sketch.js";
import { mainFont } from "./sketch.js";

export default class Dice extends Button {
  constructor(x, y, r, g, b) {
    super(x, y, 150, 150, r, g, b);
    this.isActive = true;
    this.value = -1;
    this.isFloatingDown = true;
    this.originalY = this.y;
    this.shadowWidth = this.width;
  }

  roll() {
    this.value = Math.ceil(random(0, 6));
  }

  display() {
    this.updatePosition();

    push();
    rectMode(CENTER);
    if (this.isActive) {
      stroke(59, 50, 84);
    } else {
      stroke(209, 98, 124);
    }

    strokeWeight(8);
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.height, 30);
    noStroke();
    fill(this.r + 30, this.g + 30, this.b + 30);
    rect(this.x, this.y - 35, this.width - 20, this.height - 85, 20);
    fill(255);
    stroke(59, 50, 84);
    point(this.x - 40, this.y + 35);
    point(this.x + 40, this.y + 35);
    if (this.value === 6) {
      push();
      noFill();
      translate(this.x, this.y + 20);
      rotate(5.5);
      arc(0, 0, 60, 60, HALF_PI, PI);
      pop();
    } else {
      line(this.x - 20, this.y + 45, this.x + 20, this.y + 45);
    }
    stroke(255);
    this.displayNumber();

    noStroke();
    fill(71, 71, 112); //56, 44, 41
    ellipse(this.x, this.originalY + 130, this.shadowWidth - 50, 30);
    pop();
  }

  displayNumber() {
    push();
    fill(255);
    stroke(54, 52, 53);
    strokeWeight(5);

    if (this.value === 1) {
      this.display1();
    } else if (this.value === 2) {
      this.display2();
    } else if (this.value === 3) {
      this.display3();
    } else if (this.value === 4) {
      this.display4();
    } else if (this.value === 5) {
      this.display5();
    } else if (this.value === 6) {
      this.display6();
    } else if (this.value === -1) {
      this.displayQuestionMark();
    }
    pop();
  }

  displayQuestionMark() {
    push();
    noStroke();
    textAlign(CENTER);
    strokeWeight(7);
    textFont(mainFont);
    textSize(50);
    fill(112, 104, 94);
    text("?", this.x, this.y - 20);
    fill(255);
    text("?", this.x, this.y - 24);
    pop();
  }

  display1() {
    ellipse(this.x, this.y - 40, 20, 10);
  }

  display2() {
    ellipse(this.x - 40, this.y - 55, 20, 10);
    ellipse(this.x + 40, this.y - 25, 20, 10);
  }

  display3() {
    this.display1();
    this.display2();
  }

  display4() {
    this.display2();
    ellipse(this.x - 40, this.y - 25, 20, 10);
    ellipse(this.x + 40, this.y - 55, 20, 10);
  }

  display5() {
    this.display1();
    this.display4();
  }

  display6() {
    this.display4();
    ellipse(this.x, this.y - 25, 20, 10);
    ellipse(this.x, this.y - 55, 20, 10);
  }

  clicked() {
    this.isActive = !this.isActive;
  }

  float() {
    if (this.isFloatingDown) {
      this.y += 0.4;
      this.shadowWidth++;
    } else {
      this.y -= 0.4;
      this.shadowWidth--;
    }
    if (this.y >= this.originalY + 10) {
      this.isFloatingDown = false;
    }

    if (this.y <= this.originalY) {
      this.isFloatingDown = true;
    }
    //console.log(this.y, this.orignalY, this.isFloatingDown);
  }
}
