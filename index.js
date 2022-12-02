//require inquirer, file system
const fs = require("fs");
const inquirer = require("inquirer");
const allEmployees = [];

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
      let managerID = response.managerID;
      managerID = []; //maybe want an array of objects so we can know the overarching name of the index.
      managerID.push({
        position: "Manager",
        name: response.managerName,
        id: response.managerID,
        email: response.managerEmail,
        officeNumber: response.managerOffice,
      });
      console.log(managerID);
      allEmployees.push(managerID);
      console.log(allEmployees);
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
      let engineerID = response.engineerID;
      engineerID = []; //maybe want an array of objects so we can know the overarching name of the index.
      engineerID.push({
        position: "Engineer",
        name: response.engineerName,
        id: response.engineerID,
        email: response.engineerEmail,
        github: response.engineerDetails,
      });

      console.log(engineerID);
      allEmployees.push(engineerID);
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
      let internID = response.engineerID;
      internID = []; //maybe want an array of objects so we can know the overarching name of the index.
      internID.push({
        position: "Intern",
        name: response.internName,
        id: response.internID,
        email: response.internEmail,
        university: response.internDetails,
      });

      console.log(internID);
      allEmployees.push(internID);

      addAdditionalEmployee();
      return response;
    });
}

function printArrays() {
  console.log(allEmployees);
}

//add manager once
//add engineer and intern together.

/*
      {
        type: "input",
        name: "employeeID",
        message: "What is their employee ID?",
        when(answers) {
          return answers.addManager === "yes";
        },
      },

      {
        type: "input",
        name: "employeeEmail",
        message: "What is the employee's email address?",
        when(answers) {
          return answers.addManager === "yes";
        },
      },

      {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?",
        when(answers) {
          return answers.addManager === "yes";
        },
      },





      {
        type: "list",
        name: "addManager",
        message: "Would you like to add the manager?",
        choices: ["yes", "no"],
      },



    ])

    .then((response) => {
      if (response.addEmployee === "yes") {
       ;
      }
    });


function employeeDetails (){
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeName",
        message: "What is the name of the employee?",
        when(answers) {
          return answers.addEmployee === "yes";
        },
      },

      {
        type: "input",
        name: "employeeID",
        message: "What is the employee's ID?",
        when(answers) {
          return answers.addEmployee === "yes";
        },
      },

      {
        type: "input",
        name: "employeeEmail",
        message: "What is the employee's email address?",
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

      {
        type: "list",
        name: "addAnother",
        message: "Would you like to add another employee?",
        choices: ["yes", "no"],
        when(answers) {
          return answers.addEmployee === "yes";
        },
      },
    ])


    //asynchronous function that acts when a response comes back.  Uses the data to create markdown file
    .then((response) => {
      const name = new employee(response);
      //recall function? and say, user created please enter new employees information
      //const renderedMarkdown = markdownTemplate(response);
      //writeToFile(README, renderedMarkdown);
    });
}
}*/

init();

//figure out how to REQUIRE RESPONSE in node.
