//require inquirer, file system, html generator
const fs = require("fs");
const generateHTML = require("./util/generateHtml");
const inquirer = require("inquirer");

//require classes and subclasses
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//create array to store all employee information
const allEmployees = [];

//initialize project.  Asks user questions in the terminal
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

//function to ask user for manager details
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
      addAdditionalEmployee();
    });
}
//function that asks if user wants to add another employee
//if yes calls intern or engineer function
//if no calls build team function
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
        buildTeam();
      }
    });
}
//function that asks whether the user wants the new employee to be an intern or engineer
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

//function to ask user for engineer details
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
    });
}

//function to ask user for intern details
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
    });
}
//function calls generatehtml file.  It passes it the allEmployees array and generates the index.html file
function buildTeam() {
  fs.writeFile(`index.html`, generateHTML(allEmployees), (error) =>
    error ? console.log(error) : console.log("HTML file built")
  );
}

init();

//figure out how to REQUIRE RESPONSE in node.
