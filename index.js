// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter the title of your repository.')
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'What is the description of your repository? (*)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a description of your repository.')
            return false;
        }
    }
},
{
    type:'confirm',
    name: 'confirmInstall',
    message: 'Is there an installation process?'
},
{
    type: 'input',
    name: 'install',
    message: 'List all installation instructions.',
    when: ({confirmInstall}) => {
        if(confirmInstall) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmInstructions',
    message: 'Would you want to provide instructions for your project?'
},
{
    type: 'input',
    name: 'instructions',
    message: 'List instructions for your applications.',
    when: ({confirmInstructions}) => {
        if (confirmInstructions) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmContribution',
    message: 'May other developers contribute to your repository?'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please explain how other developers may contribute to your project.',
    when: ({ confirmContribution }) => {
    if (confirmContribution) {
        return true;
    } else {
        return false;
    }
    }
},
{
    type: 'confirm',
    name: 'confirmTest',
    message: 'Is testing available?'
},
{
    type: 'input',
    name: 'testing',
    message: 'Please explain how users may test your application.',
    when: ({ testConfirm }) => {
    if (testConfirm) {
        return true;
    } else {
        return false;
    }
    }
},
{ 
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['GNU AGPLv3', 'GNU GPLv3',
    'GNU LGPLv3', 'Mozilla Public License 2.0',
    'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    validate: nameInput => {
    if (nameInput) {
    } else {
        console.log('Please select a license.');
        return false;
    }
    }
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (*)',
    validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('Please enter your GitHub username.');
        return false;
    }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address? (*)',
    validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('Please enter your email.');
        return false;
    }
    }
},
{
    type: 'input',
    name: 'questions',
    message: 'Please list instructions for those who wish to contact you.',
    validate: (nameInput) => {
    if (nameInput) {
        return true;
    } else {
        return false;
    }
    }
}];