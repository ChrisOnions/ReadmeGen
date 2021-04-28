function renderLicenseBadge(Licence) {
  console.log("the licenece is" + Licence)
  if (Licence === 'MIT') {
    return '![NPM](https://img.shields.io/badge/Licence-MIT-green)'
  }
  else if (Licence === 'Apache license 2.0') {
    return '![Apache](https://img.shields.io/badge/Licence-Apache_2.0-green)'
  }
  else if (Licence === 'GNU GPLv3') {
    return '![License: GPL v3](https://img.shields.io/badge/Licence-GPLv3%2B-blue)'
  }
  else if (Licence === 'Mozilla Public License 2.0') {
    return '![Mozilla Public License 2.0](https://img.shields.io/badge/Licence-License__MPL__2.0-red)'
  }
  else {
    return 'No Licence Detected'
  }
};

function renderLicenseLink(Licence) {
  return 'https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>'
}

function generateMarkdown(data) {
  return `
  # ${data.Title}
  
  ### - Licences - 

  ${renderLicenseBadge(data.Licence)}

  ## Table of contents
  
  * [Description](#Description)
  * [Aim](#Aim)
  * [Prerequisites](#Prerequisites)
  * [Pictures](#Pictures)
  * [Links](#Links)
  * [Contributing](#Contributing)  
  * [Questions](#Questions)
  
  # Description :

  * ${data.Description}

  # GitHub links
  **Repository**

  * [Repository]${'(https://github.com/' + data.Username + '/' + data.Title + ')'}
  
  **Live Project**
  
  *  [LIVE PROJECT]${'(https://' + data.Username + '.github.io/' + data.Title + ')'}
  
  
  # Aim:

  ${data.Aim}
    
  
  # User Story:

  ${data.User_Story}
  
  # Install instructions 

  ${data.Install}
  
  ## Pictures:

![404 image missing](./assets/Pictures / "Description")


  
  ## Links

Add links here
  ## Questions
Any questsions please email At - 

Email - ${data.Email}
  `;
}

module.exports = generateMarkdown;
