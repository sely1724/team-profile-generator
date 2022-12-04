//require inquirer, file system
const fs = require("fs");
const generateHTML = require("./util/generateHtml");
const inquirer = require("inquirer");
const allEmployees = [];

//require classes and subclasses
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
        name: "addManager",
        message: "Would you like to add the manager?",
        choices: ["yes", "no"],
      },
    ])
    .then((response) => {
      if (response.addManager === "yes") {
        const addManager = true;
        managerDetails();
      }
    });
}

function managerDetails() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },

      {
        type: "input",
        name: "managerID",
        message: "What is the manager's ID?",
      },

      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?",
      },
    ])
    .then((response) => {
      let manager1 = new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice
      );
      allEmployees.push(manager1);
      //console.log("Manager added.");
      //console.log(allEmployees);
      addAdditionalEmployee();
      //return response;
    });
}

function addAdditionalEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add an additional Employee?",
        choices: ["yes", "no"],
      },
    ])
    .then((response) => {
      if (response.addEmployee == "yes") {
        internOrEngineer();
      } else {
        //create object holding all employee information.  for each unique array we push up to object.

        printArrays();

        buildTeam();
      }
    });
}

function internOrEngineer() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "internOrEngineer",
        message: "Would you like to add an Intern or Engineer?",
        choices: ["Intern", "Engineer"],
      },
    ])
    .then((response) => {
      if (response.internOrEngineer == "Intern") {
        internDetails();
      } else {
        engineerDetails();
      }
    });
}

function engineerDetails() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },

      {
        type: "input",
        name: "engineerID",
        message: "What is the engineer's ID?",
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
      },

      {
        type: "input",
        name: "engineerDetails",
        message: "What the engineer's GitHub username?",
      },
    ])
    .then((response) => {
      let engineer = new Engineer(
        response.engineerName,
        response.engineerID,
        response.engineerEmail,
        response.engineerDetails
      );

      allEmployees.push(engineer);
      addAdditionalEmployee();

      //return response;
    });
}

function internDetails() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },

      {
        type: "input",
        name: "internID",
        message: "What is the intern's ID?",
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },

      {
        type: "input",
        name: "internDetails",
        message: "What the intern's university?",
      },
    ])
    .then((response) => {
      let intern = new Intern(
        response.internName,
        response.internID,
        response.internEmail,
        response.internDetails
      );

      allEmployees.push(intern);

      addAdditionalEmployee();
      //return response;
    });
}

function printArrays() {
  //console.log(allEmployees);
}

function buildTeam() {
  fs.writeFile(`index.html`, generateHTML(allEmployees), (error) =>
    error ? console.log(error) : console.log("HTML file built")
  );
}

//add manager once
//add engineer and intern together.

//asynchronous function that acts when a response comes back.  Uses the data to create markdown file
// .then((response) => {
//  const name = new employee(response);
//recall function? and say, user created please enter new employees information
//const renderedMarkdown = markdownTemplate(response);
//writeToFile(README, renderedMarkdown);
// });

init();

//figure out how to REQUIRE RESPONSE in node.
