// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const fs = require("fs");
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: "description",
        message: "Describe your project"
    },
    {
        type: 'input',
        name: "installation",
        message: "Describe any instructions for installation, if needed"
    },
    {
        type: 'input',
        name: "questions",
        message: "What is your Github username?"
    },
    {
        type: 'input',
        name: "questions",
        message: "What is your email address?"
    },
]).then(answers => {
    fs.writeFileSync('./dist/README.md', 
`# Project Title: ${answers.title}

## Description
${answers.description}


`)
//  description, installation_instructions, usage information, contribution guidelines, and test instructions
//  Description, Installation, Usage, Contributing, and Tests
})