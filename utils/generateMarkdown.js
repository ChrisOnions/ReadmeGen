// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
  return '![NPM](https://img.shields.io/badge/Licence-MIT-green)'
  }
  else if (license === 'Apache license 2.0'){
  return '![Apache](https://img.shields.io/badge/Licence-Apache_2.0-green)'
  }
  else if (license === 'GNU GPLv3'){
  return '![License: GPL v3](https://img.shields.io/badge/License_GPLv3+_blue)'
  }
  else if (license === 'Mozilla Public License 2.0'){
    return '![Mozilla Public License 2.0](https://img.shields.io/badge/License_MPL_2.0_red)'
  }
  else { 
  return 'No Licence Detected'
  }
 };
 function BuiltWith(items){
   items.forEach(element => {
    return `* ${element /n}`
   });
 }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return'https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>'
 }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.Title}
 ${renderLicenseBadge(data.license)}

  ## Table of contents
  * [Aim](#Aim)
  * [Challenges](#Challenges)
  * [Prerequisites](#Prerequisites)
  * [Pictures](#Pictures)
  * [Collaborators](#collaborators)
  * [Technologies](#technologies)
  * [Links](#Links)
  
  # General info :
  * ${data.generalinfo}
  **Github**
  * ${'https://github.com/'+ data.Username+'/'+ data.Title}
  
  **Live Project**
  * ${'https://' + data.Username + '.github.io/' + data.Title}
  
  # Built With:
  
  ${BuiltWith(data.Built_With)}
  
  # Aim :
    
  Add here
    
  # Project Description:
  
  Project Description:
  
  # User Story:
  
  [type of user...]
  [goal...]
  
  # Prerequisites :
  
  Can be opened in any text editor workspace
  
  Check browser extentions from blocking application
  
  # Example
  
  * Visual studio code
  * notepad++
  
  
  # Collaborators
  
  
  # Technologies
  - FontAwesome
  - Typekit
  - JQuery
  - Spotify
  - The CocktailDB API
  
  ## Pictures :
  
  ![404 image missing](./assets/Pictures/ "Description")
  ![404 image missing](./assets/Pictures/ "Description")
  ![404 image missing](./assets/Pictures/ "Description")
  
  # Links
  
  Add links here
`;
}

module.exports = generateMarkdown;
