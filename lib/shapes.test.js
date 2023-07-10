import { Triangle, Circle, Square } from "./shapes.js";

test("Triangle render method returns correct SVG string", () => {
  const triangle = new Triangle("blue");
  expect(triangle.render()).toEqual(
    '<polygon points="100,150 150,50 200,150" fill="blue" />'
  );
});

//Todo: add tests for Circle and Square
