export default class Button {
  constructor(x, y, width, height, r, g, b) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  display() {
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
