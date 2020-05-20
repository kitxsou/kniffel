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
  upperTableCells,
  restartIngameButton,
} from "./screens/gameScreen.js";

export var myFont;
export var mainFont;
export var mainFontDif;
var currentScreen = "start";

export function setCurrentScreen(newScreen) {
  currentScreen = newScreen;
}

window.preload = function () {
  myFont = loadFont("assets/Montserrat-ExtraBold.ttf");
  mainFont = loadFont("assets/Subway-Black.ttf");
  mainFontDif = loadFont("assets/Subway-Shadow.ttf");
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

  for (var currentTableCell of upperTableCells) {
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
