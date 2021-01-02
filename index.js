const fs = require('fs');
const inquirer = require('inquirer');

//prompting the user to choose synchronous or asynchronous
inquirer.prompt([
  {
    type: "list",
    name: "syncAsync",
    message: "Synchronously or Asynchronously read and write?",
    choices: ['Synchronously', 'Asynchronously']
  }
]).then(answers => {
  var choice = answers.syncAsync;
});
