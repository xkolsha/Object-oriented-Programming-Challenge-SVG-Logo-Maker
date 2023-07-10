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
    // This will render a SVG string for a triangle
    return `<svg viewBox="0 0 300 300"><polygon points="100,150 150,50 200,150" fill="${this.color}"></polygon></svg>`;
  }
}
class Circle extends Shape {
  render() {
    // This will render a SVG string for a circle
    return `<svg viewBox="0 0 300 300"><circle cx="150" cy="150" r="50" fill="${this.color}"></circle></svg>`;
  }
}

class Square extends Shape {
  render() {
    // This will render a SVG string for a square
    return `<svg viewBox="0 0 300 300"><rect x="100" y="100" width="100" height="100" fill="${this.color}"></rect></svg>`;
  }
}

// Export the classes
export { Triangle, Circle, Square };
