// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Name of project',
    choices: ['Built With', 'Aim', 'Project Description', 'User Story', 'Pictures :', 'Technologies', 'Collaborators']
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you from?',
  },
  {
    type: 'input',
    name: 'hobby',
    message: 'What is your favorite hobby?',
  }
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
