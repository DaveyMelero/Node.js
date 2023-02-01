function renderLicenseBadge(license) {
  let badge = "";

  if(license !== "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let licenseLink;

  
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  let licenseSect = "";

  if (license !== "None") {
    licenseSect += "## License\n"
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSect;
}



// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
//   ${renderLicenseBadge(template.title)}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of Contents:
1. [Description](#description) 
2. [Installation](#installation)
3. [Usage](#usage)  
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)


# Description
${data.description}
# Installation
${data.installation}
# Usage
${data.usage}
# Contributing
${data.contributing}
# Tests
${data.tests}
${renderLicenseSection(data.license)}
# Questions
${data.github}

${data.email}`;
}

module.exports = generateMarkdown;