// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}
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
  * ${Project.github}
  
  **Live Project**
  * ${Project.Live}
  
  # Built With:
  
  * HTML
  * Css
  * reset.css
  * Visual Studio Code
  * ES6 Javascript
  
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
