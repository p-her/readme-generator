// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {   question: "What is your GitHub username?",  },
    {   question: "What is your email address?"     },
    {   question: "What is your project's name?"    },
    {   question: "Please write a short description of your project"    },
    {   question: "What kind of license should your project have?"  },
    {   question: "What command should be run to install dependencies?" },
    {   question: "What common should be run to run tests?"     },
    {   question: "What does the user need to know about using the repo?"   },
    {   question: "What does the user need to know about contributing to the repo?"     }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};
// prompt the questions to the user to answer
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'github',
        message: questions[0].question,
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
           
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: questions[1].question ,
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
       
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message:questions[2].question,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            
            return false;
          }
        }
      },
      {
          type: 'input',
          name: 'description',
          message: questions[3].question,
          validate: descriptionInput => {
              if(descriptionInput){
                  return true;
              }else{
               
                  return false;
              }
          }  
      },
      {
        type: 'list',
        name: 'license',
        message: questions[4].question,
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'] 
      },
     
    
      {
        type: 'input',
        name: 'install',
        message:questions[5].question,
        validate: commandInput => {
          if (commandInput) {
            return true;
          } else {
           
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message:questions[6].question ,
        validate: runCommandInput => {
          if (runCommandInput) {
            return true;
          } else {
           
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message:questions[7].question,
        validate: useRepoInput => {
          if (useRepoInput) {
            return true;
          } else {
          
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribute',
        message:questions[8].question,
        validate: contributeRepoInput => {
          if (contributeRepoInput) {
            return true;
          } else {
          
            return false;
          }
        }
      }
    
    ]);
  };
  
  


// TODO: Create a function to initialize app
function init() {
    promptUser()
   .then(data => {
    return generateMarkdown(data) 

   })
   .then(page => {
        console.log('Generating README... ')
        writeToFile('./readme/README.md', page)
   })
}

// Function call to initialize app
init();

