function generateMarkdown(data) {
    //license
    let userLicense = `${data.license}`;
    let licenseLink = '';
    // Provides the correct link for the license the user chooses
    if (userLicense === 'GNU AGPLv3') {
      userLicense = 'GNUAGPLv3';
      licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
    };
    if (userLicense === 'GNU GPLv3') {
      userLicense = 'GNUGPLv3';
      licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
    };
    if (userLicense === 'GNU LGPLv3') {
      userLicense = 'GNULGPLv3';
      licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
    };
    if (userLicense === 'Mozilla Public License 2.0') {
      userLicense = 'MozillaPublicLicense2.0';
      licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
    };
    if (userLicense === 'Apache License 2.0') {
      userLicense = 'ApacheLicense2.0';
      licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
    };
    if (userLicense === 'MIT License') {
      userLicense = 'MITLicense';
      licenseLink = 'https://choosealicense.com/licenses/mit/';
    };
    if (userLicense === 'Boost Software License 1.0') {
      userLicense = 'BoostSoftwareLicense1.0';
      licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
    };
    if (userLicense === 'The Unlicense') {
      userLicense = 'TheUnlicense';
      licenseLink = 'https://choosealicense.com/licenses/unlicense/';
    };
  
  // Creates a variable that allows data to be added to it
  let markdownTemplate =
      
  // Title and Description
      
  `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ![badge](https://img.shields.io/badge/license-${userLicense}-brightorange)`;
    // Create optional sections in a table of contents after the required sections such as title, description
  
  let tableOfContents =
  `## Table of Contents`;
    if (data.installation) {
      tableOfContents +=
        `
    * [Installation](#installation)`
    };
    if (data.instructions) {
      tableOfContents +=
        `
    * [Instructions](#instructions)`
    };
    if (data.contribution) {
      tableOfContents +=
        `
    * [Contribution](#contribution)`
    };
    if (data.testing) {
      tableOfContents +=
        `
    * [Testing](#testing)`
    };
  
    // Append table of contents to template
    markdownTemplate += tableOfContents;
  
    // Add contact info and license
    markdownTemplate +=
      `
    * [Questions](#questions)`;
      
    markdownTemplate +=
      `
    * [License](#license)
      
      `;
  
    // Optional sections 
  
    // Installation
    if (data.installation) {
      markdownTemplate +=
        `
  ## Installation
      
    *Follow these steps to properly install this application:*
    ${data.installation}`
    };
  
    // Usage instructions
    if (data.instructions) {
      markdownTemplate +=
        `
        
  ## Usage
    *Instructions for use:*
    ${data.instructions}`
    };
  
    // Contributions
    if (data.contribution) {
      markdownTemplate +=
        `
        
  ## Contribution
    *If you would like to contribute, please adhere to these guidelines:*
    ${data.contribution}`
    };
  
    // Testing
    if (data.testing) {
      markdownTemplate +=
        `
        
  ## Testing
    *Instructions for testing application:*
    ${data.testing}`
    };
  
    // Questions
      markdownTemplate +=
        `
        
  ## Questions
        
    *For further questions:*
    ${data.questions}
    
    *Contact Info:*
    GitHub: [${data.username}](https://github.com/${data.username})
    Email: [${data.email}](mailto:${data.email})`;
    
    markdownTemplate +=
      `
      
  ## License
        
    *This application has the ${data.license}.*
        
    For more information please view the [license description](${licenseLink}).
    
    `;
    return markdownTemplate;
  }
  
  module.exports = generateMarkdown;