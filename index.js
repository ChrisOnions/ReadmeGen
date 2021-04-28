
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");

const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'Please enter name of the project?',
    default: "ReadmeGen",
  },
  {
    type: 'list',
    name: 'Licence',
    message: 'What Licence would you like to use?',
    choices: ["Apache license 2.0", "GNU GPLv3", "MIT", "Mozilla Public License 2.0"],
    default: "MIT",
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Short description of the project?',
    default: 'This is a project i have made using my coding skills',
  },
  {
    type: 'input',
    name: 'Username',
    message: 'github Username',
    default: 'Username',
  },
  {
    type: 'input',
    name: 'Install',
    message: 'Please provide install instructions',
    default: 'Please use all related content in the project such as node npm and other pacages related',
  },
  {
    type: 'input',
    name: 'Aim',
    message: 'What  does this project hope to achieve',
    default: " ie. This is a readme generator that hopes to help people create a well rounded readme ",
  },
  {
    type: 'input',
    name: 'User_Story',
    message: 'User Story:',
    default: "As a user ..., I want ..., to be able to...,",
  },
  {
    type: 'input',
    name: 'Email',
    message: 'Please eneter your Email',
    default: "user@gmail.com",
  },

];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}


function init() {
  inquirer.prompt(questions)
    .then(data => {
      writeToFile("README.md", generateMarkdown(data))
    })
}

init();

