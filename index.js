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

![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

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
Feel free to contact me for any questions
* Github: https://github.com/${answers.github}
* Email: ${answers.email}

`)

})