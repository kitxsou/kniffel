import Dice from "../dice.js";
import RollAllButton from "../rollAllButton.js";
import TableCell from "../tableCell.js";
import { myFont, setCurrentScreen, mainFont } from "../sketch.js";
import BaseTableCell from "../baseTableCell.js";
import { RestartButton } from "./endScreen.js";
import { LowerTableCell } from "../lowerTableCell.js";

export let allDice = [
  new Dice(0 - 180, 240, 155, 135, 204),
  new Dice(0, 120, 285, 174, 201),
  new Dice(0 + 180, 240, 245, 237, 169),
  new Dice(0 - 100, 410, 144, 199, 134),
  new Dice(0 + 100, 410, 149, 195, 240),
];

export let rollAllButton = new RollAllButton(0, 700, 220, 90, "roll", allDice);
export let restartIngameButton = new RestartButton(0, 850);

export let upperTableCells = [
  new TableCell(-500, windowHeight / 5, allDice, 1),
  new TableCell(-500, windowHeight / 5 + 30, allDice, 2),
  new TableCell(-500, windowHeight / 5 + 60, allDice, 3),
  new TableCell(-500, windowHeight / 5 + 90, allDice, 4),
  new TableCell(-500, windowHeight / 5 + 120, allDice, 5),
  new TableCell(-500, windowHeight / 5 + 150, allDice, 6),
];

let sumTableCell = new BaseTableCell(
  -500,
  windowHeight / 5 + 180,
  "total score",
  sumOfAllTableCells
);

let bonusTableCell = new BaseTableCell(
  -500,
  windowHeight / 5 + 210,
  "bonus",
  addBonusToSum
);

let totalUpperTableCell = new BaseTableCell(
  -500,
  windowHeight / 5 + 260,
  "total upper section",
  totalUpperSum
);

let totalLowerTableCell = new BaseTableCell(
  -500,
  windowHeight / 5 + 550,
  "total lower section",
  totalLowerSum
);

let grandTotalTableCell = new BaseTableCell(
  -500,
  windowHeight / 5 + 620,
  "GRAND TOTAL",
  grandTotalSum
);

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
  line(510, windowHeight / 5 + 525, 200, windowHeight / 5 + 525);
  //stroke(59, 50, 84);
  line(510, windowHeight / 5 + 290, 200, windowHeight / 5 + 290);
  line(510, windowHeight / 5 + 580, 200, windowHeight / 5 + 580);

  noStroke();
  textFont(mainFont);
  textSize(50);
  textAlign(CENTER);
  fill(255);
  text("score table", windowWidth / 2 - 600, windowHeight / 7);
  pop();
}

function rounds() {
  push();
  noStroke();
  textFont(mainFont);
  textSize(30);
  textAlign(CENTER);
  fill(255);
  text("rolls left: " + (3 - count), windowWidth / 2 + 600, windowHeight / 7);
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

export default function () {
  if (hasFinished()) {
    setCurrentScreen("end");
  }

  textFont(myFont);

  // background(95, 72, 117);
  //87, 71, 67

  gradient(topColor, bottomColor);

  rollAllButton.display();
  restartIngameButton.displayInGame();

  table();
  rounds();

  for (var currentTableCell of upperTableCells) {
    currentTableCell.display();
  }
  for (var currentTableCell of lowerTableCells) {
    currentTableCell.display();
  }

  sumTableCell.display();
  bonusTableCell.display();
  totalUpperTableCell.display();
  totalLowerTableCell.display();
  grandTotalTableCell.display();

  for (var currentDice of allDice) {
    currentDice.display();
    currentDice.float();
  }
}

function hasFinished() {
  for (var currentTableCell of [...upperTableCells, ...lowerTableCells]) {
    //put everything of both arrays in 1 array :0
    if (currentTableCell.value === 0 && !currentTableCell.isCrossed) {
      return false;
    }
  }
  return true;
}
function sumOfAllTableCells() {
  let sum = 0;
  for (let currentTableCell of upperTableCells) {
    if (!currentTableCell.isCrossed) {
      sum += currentTableCell.value;
    }
  }
  return sum;
}

function addBonusToSum() {
  let sum = sumOfAllTableCells();
  if (sum >= 63) {
    return 35;
  } else {
    return 0;
  }
}

function totalUpperSum() {
  return sumOfAllTableCells() + addBonusToSum();
}

function totalLowerSum() {
  let sum = 0;
  for (let currentTableCell of lowerTableCells) {
    if (!currentTableCell.isCrossed) {
      sum += currentTableCell.value;
    }
  }
  return sum;
}

export function grandTotalSum() {
  return totalUpperSum() + totalLowerSum();
}

function countDice(allDice) {
  let diceCount = [0, 0, 0, 0, 0, 0, 0];

  console.log(allDice[0]);

  for (let currentDice of allDice) {
    diceCount[currentDice.value]++;
  }
  return diceCount;
}

function hasAtLeast(min, diceCount) {
  for (let currentCount of diceCount) {
    if (currentCount >= min) {
      return true;
    }
  }
  return false;
}

export let threeOfAKindCell = new LowerTableCell(
  -500,
  windowHeight / 5 + 320,
  allDice,
  "3 of a kind",
  threeOfAKind,
  sumOfAllDice
);

export let fourOfAKindCell = new LowerTableCell(
  -500,
  windowHeight / 5 + 350,
  allDice,
  "4 of a kind",
  fourOfAKind,
  sumOfAllDice
);

export let fullHouseCell = new LowerTableCell(
  -500,
  windowHeight / 5 + 380,
  allDice,
  "full house",
  fullHouse,
  sumFullHouse
);

export let smallStraightCell = new LowerTableCell(
  -500,
  windowHeight / 5 + 410,
  allDice,
  "small straight",
  smallStraight,
  sumOfSmallStraight
);

export let longStraightCell = new LowerTableCell(
  -500,
  windowHeight / 5 + 440,
  allDice,
  "long straight",
  longStraight,
  sumOfLongStraight
);

export let kniffelCell = new LowerTableCell(
  -500,
  windowHeight / 5 + 470,
  allDice,
  "kniffel",
  kniffel,
  sumKniffel
);

export let chanceCell = new LowerTableCell(
  -500,
  windowHeight / 5 + 500,
  allDice,
  "chance",
  chance,
  sumOfAllDice
);

function threeOfAKind() {
  return hasAtLeast(3, countDice(allDice));
}

function fourOfAKind() {
  return hasAtLeast(4, countDice(allDice));
}

function kniffel() {
  return hasAtLeast(5, countDice(allDice));
}

function smallStraight() {
  let diceCount = countDice(allDice);

  if (
    (diceCount[1] > 0 &&
      diceCount[2] > 0 &&
      diceCount[3] > 0 &&
      diceCount[4] > 0) ||
    (diceCount[2] > 0 &&
      diceCount[3] > 0 &&
      diceCount[4] > 0 &&
      diceCount[5] > 0) ||
    (diceCount[3] > 0 &&
      diceCount[4] > 0 &&
      diceCount[5] > 0 &&
      diceCount[6] > 0)
  ) {
    return true;
  }

  return false;
}

function longStraight() {
  let diceCount = countDice(allDice);

  if (
    (diceCount[1] > 0 &&
      diceCount[2] > 0 &&
      diceCount[3] > 0 &&
      diceCount[4] > 0 &&
      diceCount[5] > 0) ||
    (diceCount[2] > 0 &&
      diceCount[3] > 0 &&
      diceCount[4] > 0 &&
      diceCount[5] > 0 &&
      diceCount[6] > 0)
  ) {
    return true;
  }

  return false;
}

function fullHouse() {
  let diceCount = countDice(allDice);
  let has2 = false;
  let has3 = false;
  for (let currentCount of diceCount) {
    if (currentCount === 2) {
      has2 = true;
    }
    if (currentCount === 3) {
      has3 = true;
    }
  }
  if (has2 && has3) {
    return true;
  }
  return false;
}

function chance() {
  for (var currentDice of allDice) {
    if (currentDice.value === -1) {
      return false;
    }
  }
  return true;
}

function sumOfAllDice() {
  let newValue = 0;
  for (let currentDice of allDice) {
    newValue += currentDice.value;
  }
  return newValue;
}

function sumOfSmallStraight() {
  return 30;
}
function sumOfLongStraight() {
  return 40;
}
function sumKniffel() {
  return 50;
}
function sumFullHouse() {
  return 25;
}
export let lowerTableCells = [
  threeOfAKindCell,
  fourOfAKindCell,
  fullHouseCell,
  smallStraightCell,
  longStraightCell,
  kniffelCell,
  chanceCell,
];
