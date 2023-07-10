class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("Method 'render' must be implemented.");
  }
}
class Triangle extends Shape {
  render() {
    // This will render an SVG string for a triangle
    return `<polygon points="100,150 150,50 200,150" fill="${this.color}" />`;
  }
}
