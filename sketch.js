import Dice from "./dice.js";
import RollAllButton from "./rollAllButton.js";
import TableCell from "./tableCell.js";

let allDice = [
  new Dice(0 - 180, 100, 170, 150, 218),
  new Dice(0, 100, 252, 186, 211),
  new Dice(0 + 180, 100, 252, 244, 177),
  new Dice(0 - 90, 280, 164, 201, 143),
  new Dice(0 + 90, 280, 255, 197, 161),
];

let rollAllButton = new RollAllButton(0, 450, 220, 90, "roll", allDice);

let tableCells = [
  new TableCell(-650, windowHeight / 4, allDice, 1),
  new TableCell(-650, windowHeight / 4 + 70, allDice, 2),
  new TableCell(-650, windowHeight / 4 + 140, allDice, 3),
  new TableCell(-650, windowHeight / 4 + 210, allDice, 4),
  new TableCell(-650, windowHeight / 4 + 280, allDice, 5),
  new TableCell(-650, windowHeight / 4 + 350, allDice, 6),
];

var myFont;

window.preload = function () {
  myFont = loadFont("assets/Montserrat-ExtraBold.ttf");
};

window.draw = function () {
  textFont(myFont);

  background(87, 71, 67);

  rollAllButton.display();
  table();

  for (var currentTableCell of tableCells) {
    currentTableCell.display();
  }

  for (var currentDice of allDice) {
    currentDice.display();
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
  rectMode(CENTER);
  fill(56, 44, 41);
  strokeWeight(8);
  stroke(232, 223, 213);
  rect(windowWidth / 2 - 600, (windowHeight / 4) * 1.9, 400, 650, 40);
  line();
}
