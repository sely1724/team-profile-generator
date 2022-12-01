//require inquirer, file system
const fs = require("fs");
const inquirer = require("inquirer");

//require classes and subclasses
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

//require html file that we will add names to
//const htmlGenerate = require("./dist/index.html");
//const { getSystemErrorName } = require("util");

//function that will create the actual html???  doc with user generated information??
// function writeToHTML???(README, renderedMarkdown) {
//   fs.writeFile(README, renderedMarkdown, (err) =>
//     err ? console.error(err) : console.log("README generated")
//   );

//initialize project.  Asks questions in the terminal
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add an employee?",
        choices: ["yes", "no"],
      },
      {
        type: "list",
        name: "position",
        message: "What type of employee would you like to add",
        choices: ["Manager", "Engineer", "Intern"],
        when(answers) {
          return answers.addEmployee === "yes";
        },
      },

      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        when(answers) {
          return answers.position === "Manager";
        },
      },

      {
        type: "input",
        name: "gitHub",
        message: "What is the engineer's github id?",
        when(answers) {
          return answers.position === "Engineer";
        },
      },

      {
        type: "input",
        name: "university",
        message: "What is the intern's school?",
        when(answers) {
          return answers.position === "Intern";
        },
      },
    ])

    //asynchronous function that acts when a response comes back.  Uses the data to create markdown file
    .then((response) => {
      const name = new employee(response);
      //const renderedMarkdown = markdownTemplate(response);
      //writeToFile(README, renderedMarkdown);
    });
}

init();
//figure out how to REQUIRE RESPONSE in node.
