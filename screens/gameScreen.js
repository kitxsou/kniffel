import Dice from "../dice.js";
import RollAllButton from "../rollAllButton.js";
import ResetAllButton from "../resetAllButton.js";
import TableCell from "../tableCell.js";
import { myFont, setCurrentScreen, mainFont } from "../sketch.js";
import SumTableCell from "../SumTableCell.js";

export let allDice = [
  new Dice(0 - 180, 240, 155, 135, 204),
  new Dice(0, 120, 285, 174, 201),
  new Dice(0 + 180, 240, 245, 237, 169),
  new Dice(0 - 100, 410, 144, 199, 134),
  new Dice(0 + 100, 410, 149, 195, 240),
];

export let rollAllButton = new RollAllButton(0, 700, 220, 90, "roll", allDice);
export let resetAllButton = new ResetAllButton(
  0,
  820,
  220,
  90,
  "reset",
  allDice
);

export let tableCells = [
  new TableCell(-550, windowHeight / 5, allDice, 1),
  new TableCell(-550, windowHeight / 5 + 30, allDice, 2),
  new TableCell(-550, windowHeight / 5 + 60, allDice, 3),
  new TableCell(-550, windowHeight / 5 + 90, allDice, 4),
  new TableCell(-550, windowHeight / 5 + 120, allDice, 5),
  new TableCell(-550, windowHeight / 5 + 150, allDice, 6),
  // new TableCell(-550, windowHeight / 5 + 180, allDice, "total score"),
  // new TableCell(-550, windowHeight / 5 + 210, allDice, "bonus"),
  // new TableCell(-550, windowHeight / 5 + 260, allDice, "total upper"),
];

let sumTableCell = new SumTableCell(-550, windowHeight / 5 + 180, tableCells);

let topColor = color(117, 143, 189); //87, 71, 67
let bottomColor = color(224, 146, 182);
let count = 0;

export function clearCount() {
  count = 0;
}

export function increaseCount() {
  count++;
}

export function isEnabled() {
  if (count < 3) {
    return true;
  } else {
    return false;
  }
}

function table() {
  push();
  rectMode(CENTER);
  fill(46, 47, 105, 80); //56, 44, 41
  strokeWeight(8);
  stroke(255);
  rect(windowWidth / 2 - 600, windowHeight / 2, 400, 800, 40);
  strokeWeight(4);
  stroke(255);
  line(510, windowHeight / 5 + 235, 200, windowHeight / 5 + 235);

  noStroke();
  textFont(mainFont);
  textSize(50);
  textAlign(CENTER);
  fill(255);
  text("score table", windowWidth / 2 - 600, windowHeight / 7);
  pop();
}

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

function cloud() {
  push();
  noStroke();
  fill(255);
  ellipse(width / 2, (height / 8) * 7, 200, 100);
  ellipse(width / 2 - 250, (height / 8) * 7, 100, 50);
  ellipse(width / 2 + 250, (height / 8) * 7, 100, 50);
  pop();
}

export default function () {
  if (hasFinished()) {
    setCurrentScreen("end");
  }

  textFont(myFont);

  // background(95, 72, 117);
  //87, 71, 67

  gradient(topColor, bottomColor);

  rollAllButton.display();

  resetAllButton.display();
  table();
  //cloud();

  for (var currentTableCell of tableCells) {
    currentTableCell.display();
  }

  sumTableCell.display();

  for (var currentDice of allDice) {
    currentDice.display();
    currentDice.float();
  }
}

function hasFinished() {
  for (var currentTableCell of tableCells) {
    if (currentTableCell.value === 0 && !currentTableCell.isCrossed) {
      return false;
    }
  }
  return true;
}
