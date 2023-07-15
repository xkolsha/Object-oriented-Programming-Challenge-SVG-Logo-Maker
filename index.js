import fs from "fs";
import inquirer from "inquirer";
import { Triangle, Circle, Square } from "./lib/shapes.js";

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
    {
      type: "input",
      name: "text",
      message: "Enter the text for your logo:",
    },
  ])
  .then((answers) => {
    // Create the appropriate shape based on the user's choice
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

    // Generate the SVG string
    const svg = shape.render().replace("SVG_TEXT", answers.text);

    // Write the SVG string to a file
    fs.writeFileSync("examples/logo.svg", svg);
  });
