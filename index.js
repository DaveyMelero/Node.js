const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "Pick a project license:",
        choices: ["None", "MIT", "BSD", "GPL", "Apache"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

inquirer.prompt(questions).then((answers) => {
    createMD(answers);
});

const createMD = (data) => {
    // const template = `# ${data.title}
    const template = generateMarkdown(data);
// `
// ## Description

// ${data.description}

// ## Installation

// ${data.installation}

// ## Usage

// ${data.usage}

// ## Contributing

// ${data.contributing}

// ## Tests

// ${data.tests}

// ## License

// ${data.license}

// ## GitHub

// ${data.github}

// ## E-mail

// ${data.email}`;

    fs.writeFile("README.md", template, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("successfully");
        }
    });
};