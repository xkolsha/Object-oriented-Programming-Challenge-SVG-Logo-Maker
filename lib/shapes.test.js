import { Triangle, Circle, Square } from "./shapes.js";

test("Triangle render method returns correct SVG string", () => {
  const triangle = new Triangle("blue");
  expect(triangle.render()).toEqual(
    '<svg viewBox="0 0 300 300"><polygon points="100,150 150,50 200,150" fill="blue"></polygon></svg>'
  );
});

test("Circle render method returns correct SVG string", () => {
  const circle = new Circle("red");
  expect(circle.render()).toEqual(
    '<svg viewBox="0 0 300 300"><circle cx="150" cy="150" r="50" fill="red"></circle></svg>'
  );
});

test("Square render method returns correct SVG string", () => {
  const square = new Square("green");
  expect(square.render()).toEqual(
    '<svg viewBox="0 0 300 300"><rect x="100" y="100" width="100" height="100" fill="green"></rect></svg>'
  );
});
