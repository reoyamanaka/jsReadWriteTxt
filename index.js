const fs = require('fs');
const inquirer = require('inquirer');

var choice = "";

//prompting the user to choose synchronous or asynchronous
inquirer.prompt([
  {
    type: "list",
    name: "syncAsync",
    message: "Synchronously or Asynchronously read and write?",
    choices: ['Synchronously', 'Asynchronously']
  }
]).then(answers => {
  if (answers.syncAsync === "Synchronously") {
    console.log("Sync option selected");
  } else {
    console.log("Async option selected")
  }
});
