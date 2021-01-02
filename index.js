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
    console.log("Synchronously reading sample.txt...");
    var sampleText = fs.readFileSync('sample.txt', 'utf8');
    console.log(sampleText);

    console.log("Synchronously writing output.txt...");
    fs.writeFileSync("output.txt", sampleText);
    console.log("Done.");

  } else {
    console.log("Async option selected")
  }
});
