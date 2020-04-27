class Dice {
  constructor(x, y, r, g, b, size, round) {
    this.x = x;
    this.y = y;
    this.value = -1;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size = size;
    this.originalSize = size;
    this.round = round;
  }

  display() {
    rectMode(CENTER);
    stroke(54, 52, 53);
    strokeWeight(10);
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.size, this.size, this.round);
    textAlign(CENTER);
    fill(255);
    textSize(this.size / 2);

    if (this.value === -1) {
      text("?", this.x, this.y + 20);
    } else {
      text(this.value, this.x, this.y + 20);
    }
  }

  roll() {
    this.value = Math.ceil(random(0, 6));
  }

  isMouseOverDice() {
    return (
      mouseX >= this.x - this.size / 2 &&
      mouseX <= this.x + this.size / 2 &&
      mouseY >= this.y - this.size / 2 &&
      mouseY <= this.y + this.size / 2
    );
  }

  showMousePressed() {
    this.size = this.originalSize * 1.5;
  }

  resetSize() {
    this.size = this.originalSize;
  }
}

class DiceMonster {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.value = -1;
  }

  display() {
    rectMode(CENTER);
    stroke(54, 52, 53);
    strokeWeight(12);
    fill(166, 118, 176);
    rect(this.x, this.y, 300, 300, 45);
    noStroke();
    fill(200, 146, 212);
    rect(this.x, this.y - 65, 270, 140, 40);
    stroke(54, 52, 53);
    point(this.x - 80, this.y + 80);
    point(this.x + 70, this.y + 80);
    if (this.value === 1 || this.value === 6) {
      push();
      noFill();
      translate(this.x, this.y + 70);
      rotate(5.5);
      arc(0, 0, 60, 60, HALF_PI, PI);
      pop();
    } else {
      line(this.x - 30, this.y + 100, this.x + 20, this.y + 100);
    }
    stroke(255);

    this.displayNumber();
  }

  displayNumber() {
    fill(245, 231, 225);
    stroke(54, 52, 53);
    strokeWeight(10);

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
    } else {
      this.displayQuestionMark();
    }
  }

  displayQuestionMark() {
    textAlign(CENTER);
    textSize(50);
    text("?", this.x, this.y - 50);
  }

  display1() {
    ellipse(this.x, this.y - 75, 50, 30);
  }

  display2() {
    ellipse(this.x - 70, this.y - 105, 50, 30);
    ellipse(this.x + 70, this.y - 35, 50, 30);
  }

  display3() {
    this.display1();
    this.display2();
  }

  display4() {
    this.display2();
    ellipse(this.x - 70, this.y - 35, 50, 30);
    ellipse(this.x + 70, this.y - 105, 50, 30);
  }

  display5() {
    this.display1();
    this.display4();
  }

  display6() {
    this.display4();
    ellipse(this.x, this.y - 35, 50, 30);
    ellipse(this.x, this.y - 105, 50, 30);
  }
}

var allDice = [
  new Dice(100, 550, 164, 201, 143, 110, 30),
  new Dice(300, 550, 250, 160, 100, 110, 30),
  new Dice(500, 550, 149, 201, 232, 110, 30),
];
var diceMonster = new DiceMonster(300, 250);

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(250, 195, 206);

  diceMonster.display();

  for (var currentDice of allDice) {
    if (mouseIsPressed && currentDice.isMouseOverDice()) {
      currentDice.showMousePressed();
    } else {
      currentDice.resetSize();
    }
    currentDice.display();
  }
}

function resetAllValues() {
  diceMonster.value = -1;

  for (let currentDice of allDice) {
    currentDice.value = -1;
  }
}

function mousePressed() {
  resetAllValues();

  for (let currentDice of allDice) {
    if (currentDice.isMouseOverDice()) {
      currentDice.roll();
      diceMonster.value = currentDice.value;
      return;
    }
  }
}
