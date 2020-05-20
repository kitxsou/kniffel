import drawStartScreen, { startButton } from "./screens/startScreen.js";
import drawGameScreen, {
  threeOfAKindCell,
  fourOfAKindCell,
  chanceCell,
  kniffelCell,
  smallStraightCell,
  longStraightCell,
} from "./screens/gameScreen.js";
import drawEndScreen, { restartButton } from "./screens/endScreen.js";
import {
  allDice,
  rollAllButton,
  tableCells,
  restartIngameButton,
} from "./screens/gameScreen.js";

export var myFont;
export var mainFont;
var currentScreen = "start";

export function setCurrentScreen(newScreen) {
  currentScreen = newScreen;
}

window.preload = function () {
  myFont = loadFont("assets/Montserrat-ExtraBold.ttf");
  mainFont = loadFont("assets/Subway-Black.ttf");
};

window.draw = function () {
  if (currentScreen === "start") {
    drawStartScreen();
  } else if (currentScreen === "game") {
    drawGameScreen();
  } else if (currentScreen === "end") {
    drawEndScreen();
  }
};

window.mouseClicked = function () {
  for (var currentDice of allDice) {
    currentDice.mouseClicked();
  }

  for (var currentTableCell of tableCells) {
    currentTableCell.mouseClicked();
  }

  rollAllButton.mouseClicked();
  startButton.mouseClicked();
  restartButton.mouseClicked();
  restartIngameButton.mouseClicked();
  threeOfAKindCell.mouseClicked();
  fourOfAKindCell.mouseClicked();
  chanceCell.mouseClicked();
  kniffelCell.mouseClicked();
  smallStraightCell.mouseClicked();
  longStraightCell.mouseClicked();
};
