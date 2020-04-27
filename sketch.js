import Dice from "./dice";
import RollAllButton from "./rollAllButton";

let allDice = [
  new Dice(100, 100, 170, 150, 218),
  new Dice(280, 100, 252, 186, 211),
  new Dice(460, 100, 255, 255, 210),
  new Dice(190, 280, 164, 201, 143),
  new Dice(370, 280, 255, 197, 161),
];

let rollAllButton = new RollAllButton(280, 450, 200, 80, "roll", allDice);

function draw() {
  background(168, 216, 234);

  rollAllButton.display();

  for (var currentDice of allDice) {
    currentDice.display();
  }
}

function mouseClicked() {
  for (var currentDice of allDice) {
    currentDice.mouseClicked();
  }
  rollAllButton.mouseClicked();
}
