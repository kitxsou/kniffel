export default class Button {
  constructor(xOffset, y, width, height, r, g, b) {
    this.xOffset = xOffset;
    this.x = 0;
    this.y = y;
    this.width = width;
    this.height = height;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  updatePosition() {
    this.x = windowWidth / 2 + this.xOffset;
  }

  display() {
    this.updatePosition();

    rectMode(CENTER);
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.height);
  }

  hitTest(x, y) {
    return (
      x >= this.x - this.width / 2 &&
      x <= this.x + this.width / 2 &&
      y >= this.y - this.height / 2 &&
      y <= this.y + this.height / 2
    );
  }

  clicked() {
    console.log("cool u r");
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }
}
