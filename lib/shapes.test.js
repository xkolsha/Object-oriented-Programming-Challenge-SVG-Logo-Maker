const { Triangle, Circle, Square } = require("./shapes");

test("Triangle render method returns correct SVG string", () => {
  const triangle = new Triangle("blue");
  expect(triangle.render()).toEqual(
    '<polygon points="100,150 150,50 200,150" fill="blue" />'
  );
});

//Todo: add tests for Circle and Square
