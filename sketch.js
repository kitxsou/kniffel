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
  new TableCell(300, windowHeight / 3, allDice, 1),
  new TableCell(300, windowHeight / 3 + 80, allDice, 2),
  new TableCell(300, windowHeight / 3 + 160, allDice, 3),
  new TableCell(300, windowHeight / 3 + 240, allDice, 4),
  new TableCell(300, windowHeight / 3 + 320, allDice, 5),
  new TableCell(300, windowHeight / 3 + 400, allDice, 6),
];

window.draw = function () {
  background(87, 71, 67);

  rollAllButton.display();

  for (var currentTableCell of tableCells) {
    currentTableCell.display();
  }

  for (var currentDice of allDice) {
    currentDice.display();
  }
  // windowResized();
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

function windowResized() {
  resizeCanvas(width, height);
}
