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

let rollAllButton = new RollAllButton(0, 450, 200, 80, "roll", allDice);

let tableCells = [
  new TableCell(-650, windowHeight / 3, allDice, 1),
  new TableCell(-650, windowHeight / 3 + 80, allDice, 2),
  new TableCell(-650, windowHeight / 3 + 160, allDice, 3),
  new TableCell(-650, windowHeight / 3 + 240, allDice, 4),
  new TableCell(-650, windowHeight / 3 + 320, allDice, 5),
  new TableCell(-650, windowHeight / 3 + 400, allDice, 6),
];

window.draw = function () {
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
  rect(windowWidth / 2 - 600, (windowHeight / 4) * 2.1, 400, 650, 40);
  line();
}
