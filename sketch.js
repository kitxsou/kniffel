import Dice from "./dice.js";
import RollAllButton from "./rollAllButton.js";
import ResetAllButton from "./resetAllButton.js";
import TableCell from "./tableCell.js";

let allDice = [
  new Dice(0 - 180, 240, 155, 135, 204),
  new Dice(0, 120, 285, 174, 201),
  new Dice(0 + 180, 240, 245, 237, 169),
  new Dice(0 - 100, 410, 144, 199, 134),
  new Dice(0 + 100, 410, 149, 195, 240),
];

let rollAllButton = new RollAllButton(0, 700, 220, 90, "roll", allDice);
let resetAllButton = new ResetAllButton(0, 820, 220, 90, "reset", allDice);

let tableCells = [
  new TableCell(-550, windowHeight / 5, allDice, 1),
  new TableCell(-550, windowHeight / 5 + 30, allDice, 2),
  new TableCell(-550, windowHeight / 5 + 60, allDice, 3),
  new TableCell(-550, windowHeight / 5 + 90, allDice, 4),
  new TableCell(-550, windowHeight / 5 + 120, allDice, 5),
  new TableCell(-550, windowHeight / 5 + 150, allDice, 6),
  new TableCell(-550, windowHeight / 5 + 180, allDice, "total score"),
  new TableCell(-550, windowHeight / 5 + 210, allDice, "bonus"),
  new TableCell(-550, windowHeight / 5 + 260, allDice, "total upper"),
];

var myFont;

window.preload = function () {
  myFont = loadFont("assets/Montserrat-ExtraBold.ttf");
};

window.draw = function () {
  textFont(myFont);

  background(87, 71, 67);

  rollAllButton.display();
  resetAllButton.display();
  table();

  for (var currentTableCell of tableCells) {
    currentTableCell.display();
  }

  for (var currentDice of allDice) {
    currentDice.display();
    currentDice.float();
  }
};

window.mouseClicked = function () {
  for (var currentDice of allDice) {
    currentDice.mouseClicked();
  }
  rollAllButton.mouseClicked();

  for (var currentTableCell of tableCells) {
    currentTableCell.mouseClicked();
  }
};

function table() {
  push();
  rectMode(CENTER);
  fill(56, 44, 41);
  strokeWeight(8);
  stroke(232, 223, 213);
  rect(windowWidth / 2 - 600, windowHeight / 2, 400, 800, 40);
  strokeWeight(4);
  stroke(255);
  line(510, windowHeight / 5 + 235, 200, windowHeight / 5 + 235);
  pop();
}
