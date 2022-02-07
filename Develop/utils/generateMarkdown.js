// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'None'){
        return '';
    }
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'None'){
        return '';
    }
    return `${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'None'){
        return  '';
    }

    return `## License
    This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
  
  return `# ${data.title}

    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)

    ## Installation
    To install necessary dependencies, run the following command:
    ${data.install}

    ## Usage
    ${data.usage}

    ${renderLicenseSection(data.license)}
    
    ## Contributing
    ${data.contribute}

    ## Tests
    To run tests, run the following command:
   
    ${data.test}

    ## Questions
    If you have any questions about the repo, open an issue or contact me directly at [${data.email}].
    You can find more of my work at [${data.github}](https://www.github.com/${data.github}) 

`;
}





module.exports = generateMarkdown;


