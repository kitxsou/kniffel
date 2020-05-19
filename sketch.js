import drawStartScreen, { startButton } from "./screens/startScreen.js";
import drawGameScreen from "./screens/gameScreen.js";
import drawEndScreen from "./screens/endScreen.js";
import {
  allDice,
  rollAllButton,
  resetAllButton,
  tableCells,
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

  resetAllButton.mouseClicked();
  rollAllButton.mouseClicked();
  startButton.mouseClicked();
};
