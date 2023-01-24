const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");

// start array of questions
const questions = [
  { // Title
    type: "input",
    name: "title",
    message: "What is the title of your repository? (*)",
    //validate to cover no input edge case
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your repository title.");
        return false;
      }
    },
  },
  { // Description
    type: "input",
    name: "description",
    message: "What is the description of your repository? (*)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a description of your repository.");
        return false;
      }
    },
  },
  //confirms if there is an installation process first
  { // Confirm Installation
    type: "confirm",
    name: "confirmInstall",
    message: "Is there an installation process?",
  },
  { // Installation
    type: "input",
    name: "installation",
    message: "Please list installation instructions.",
    // allows user to input instructions IF needed
    when: ({ confirmInstall }) => {
      if (confirmInstall) {
        return true;
      } else {
        return false;
      }
    },
  },

  { // Confirm Instructions
    type: "confirm",
    name: "confirmInstructions",
    message: "Would you like to give instructions for using your application?",
  },
  { // Instructions
    type: "input",
    name: "instructions",
    message: "List instructions for using your application.",
    when: ({ confirmInstructions }) => {
      if (confirmInstructions) {
        return true;
      } else {
        return false;
      }
    },
  },

  { // Confirm Contributions
    type: "confirm",
    name: "confirmContribution",
    message: "May other developers contribute to your repository?",
  },
  { // Contributions
    type: "input",
    name: "contribution",
    message: "List guidelines for contributors to follow.",
    when: ({ confirmContribution }) => {
      if (confirmContribution) {
        return true;
      } else {
        return false;
      }
    },
  },
  { // Confirm Testing
    type: "confirm",
    name: "confirmTest",
    message: "Is testing available?",
  },
  { // Testing
    type: "input",
    name: "testing",
    message: "List instructions for testing application.",
    when: ({ confirmTest }) => {
      if (confirmTest) {
        return true;
      } else {
        return false;
      }
    },
  },
  { // License
    type: "checkbox",
    name: "license",
    message: "Choose a license.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Select a license.");
        return false;
      }
    },
  },
  { //Github UserName
    type: "input",
    name: "username",
    message: "What is your GitHub username? (*)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Enter your GitHub username.");
        return false;
      }
    },
  },
  { // Email
    type: "input",
    name: "email",
    message: "What is your email address? (*)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Enter your email.");
        return false;
      }
    },
  },
  { // Contact
    type: "input",
    name: "questions",
    message: "List instructions for those who wish to contact you.",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        return false;
      }
    },
  },
]; // End of questions array

// writes all the info gathered from the prompts to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.log("There was an error : " + error);
    }
  });
}
// promisify method accepts writeToFile as a parameter and converts it from a callback function to a promise based function
const createReadMe = util.promisify(writeToFile);
// create async function with catch for errors
async function init() {
    try {
    // waits for the user to go through the entire question array before moving on with the function
    const userAnswers = await inquirer.prompt(questions);
    console.log("The current data is being processed into your README.md: ", userAnswers);
    // get markdown template from generateMarkdown.js passing the answers as parameter
    const markdown = generateMarkdown(userAnswers);
    console.log(markdown);
    //write the readme file after the markdown is made
    await createReadMe("README0.md", markdown);
  } catch (error) {
    console.log("There was an error." + error);
  }
}

// Function call to initialize app
init();
