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
        name: "usage",
        message: "Describe how to use your app/project"
    },
    {
        type: 'input',
        name: "contributing",
        message: "Please provide contribution guidelines"
    },
    {
        type: 'input',
        name: "tests",
        message: "Please provide test instructions, if any"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application',
        choices: ['MIT', 'Apache', 'ISC', 'Babel', 'None']
    },
    {
        type: 'input',
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: 'input',
        name: "email",
        message: "What is your email address?"
    },
]).then(answers => {
    fs.writeFileSync('./dist/README.md', 
`# Project Title: ${answers.title}

## License
https://img.shields.io/badge/license-${answers.license}-blue.svg

## Description
${answers.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
https://github.com/${answers.github}
${answers.email}

`)
//  description, installation_instructions, usage information, contribution guidelines, and test instructions
//  Description, Installation, Usage, Contributing, and Tests
})