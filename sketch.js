import Dice from "./dice.js";
import RollAllButton from "./rollAllButton.js";
import TableCell from "./tableCell.js";

let allDice = [
  new Dice(windowWidth / 2 - 180, 100, 170, 150, 218),
  new Dice(windowWidth / 2, 100, 252, 186, 211),
  new Dice(windowWidth / 2 + 180, 100, 255, 255, 210),
  new Dice(windowWidth / 2 - 90, 280, 164, 201, 143),
  new Dice(windowWidth / 2 + 90, 280, 255, 197, 161),
];

let rollAllButton = new RollAllButton(
  windowWidth / 2,
  450,
  200,
  80,
  "roll",
  allDice
);

let tableCell = new TableCell(windowWidth / 4, windowHeight / 2, allDice);

window.draw = function () {
  background(168, 216, 234);

  rollAllButton.display();
  tableCell.display();

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
  tableCell.mouseClicked();
};

// function windowResized() {
//   resizeCanvas(width, height);
// }
