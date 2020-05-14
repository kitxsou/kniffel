import Dice from "./dice.js";
import RollAllButton from "./rollAllButton.js";
import ResetAllButton from "./resetAllButton.js";
import TableCell from "./tableCell.js";

let allDice = [
  new Dice(0 - 200, 100, 155, 135, 204),
  new Dice(0, 100, 245, 174, 201),
  new Dice(0 + 200, 100, 245, 237, 169),
  new Dice(0 - 100, 350, 144, 199, 134),
  new Dice(0 + 100, 350, 149, 195, 240),
];

let rollAllButton = new RollAllButton(0, 650, 220, 90, "roll", allDice);
let resetAllButton = new ResetAllButton(0, 770, 220, 90, "reset", allDice);

let tableCells = [
  new TableCell(-650, windowHeight / 4, allDice, 1),
  new TableCell(-650, windowHeight / 4 + 60, allDice, 2),
  new TableCell(-650, windowHeight / 4 + 120, allDice, 3),
  new TableCell(-650, windowHeight / 4 + 180, allDice, 4),
  new TableCell(-650, windowHeight / 4 + 240, allDice, 5),
  new TableCell(-650, windowHeight / 4 + 300, allDice, 6),
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
  rect(windowWidth / 2 - 600, (windowHeight / 4) * 1.9, 400, 650, 40);
  line();
  pop();
}
