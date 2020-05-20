import { startButton } from "./startScreen.js";

export default function () {
  push();
  fill(0);
  textSize(100);
  text("END", width / 2, height / 2);
  startButton.display();
  pop();
}
