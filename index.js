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
        message: "describe your project"
    },
    {
        type: 'input',
        name: "installation_instructions",
        message: "describe any instructions for installation, if needed"
    },
]).then(answers => {
    fs.writeFileSync('./dist/README.md', 
`# Project Title: ${answers.title}

## Description
${answers.descripion}

`)
//  description, installation_instructions, usage information, contribution guidelines, and test instructions
//  Description, Installation, Usage, Contributing, and Tests
})