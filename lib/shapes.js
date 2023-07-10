const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Which shape do you want to create?",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "color",
      message: "Enter a color for the shape:",
    },
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "Triangle":
        shape = new Triangle(answers.color);
        break;
      case "Circle":
        shape = new Circle(answers.color);
        break;
      case "Square":
        shape = new Square(answers.color);
        break;
    }

    fs.writeFileSync("examples/logo.svg", shape.render());
  });
