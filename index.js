// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'Name of project?',
  },
  {
    type: 'input',
    name: 'licenece',
    message: 'What licenece would you like to use?',
  },
  {
    type: 'input',
    name: 'Genereal Info',
    message: 'Short description of the project?',
  },
  {
    type: 'input',
    name: 'Username',
    message: 'github Username',

  },
  {
    type: 'checkbox',
    name: 'Built_with',
    message: 'What did you use to build it ?',
    Choices: ['Html', 'Css', 'ES6 Javascript', 'Node', 'NPM', 'Visual Studio Code', 'Reset.css']
  },
  {
    type: 'input',
    name: 'Aim',
    message: 'What  does this project home to achieve',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Project Description?',
  },
  {
    type: 'input',
    name: 'install instructions',
    message: 'install instructions',
  },
  {
    type: 'input',
    name: 'pictures',
    message: 'will the project be using pictures',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(data => {
      writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
