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
    console.log("Asynchronously reading sample.txt...");
    fs.readFile('sample.txt', 'utf8', function(err, data){
      console.log("Asynchronously writing output.txt...");
      fs.writeFile('output.txt', data, (err) => {});
    });
  }
});
