// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(!license){
        return '';
    }

    return `
        <section class="my-3" id="license">
            <h2 class="text-dark bg-primary p-2 display-inline-block">License</h2>
            <p>${license}</p>
        </section>
    `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(!license){
        return '';
    }

    return `
        <section class="my-3" id="license">
            <h2 class="text-dark bg-primary p-2 display-inline-block">License</h2>
            <p>
                <a href="${license}"> View Project on Github</a>
            </p>
        </section>
    `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(!license){
        return '';
    }

    return `
        <section class="my-3" id="license">
            <h2 class="text-dark bg-primary p-2 display-inline-block">License</h2>
            <p>${license}</p>
        </section>
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log("ss: " + data)

  
  return `# ${data.title}
    ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
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

`;
}





module.exports = generateMarkdown;


