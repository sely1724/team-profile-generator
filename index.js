//three arrays containing questions pertaining to each position
const teamManagerQuestions = [
  "Enter Team Manager's Name",
  "Employee ID: ",
  "Email Address: ",
  "Office Number: ",
];

const engineerQuestions = [
  "Enter Engineer's Name",
  "Employee ID: ",
  "Email Address: ",
  "GitHub Username: ",
];

const internQuestions = [
  "Enter Intern's Name",
  "Employee ID: ",
  "Email Address: ",
  "School: ",
];

//require inquirer, file system, and local markdown doc
const fs = require("fs");
const inquirer = require("inquirer");
const htmlGenerate = require("./dist/index.html");

//function that will create the actual markdown doc with user generated information
function writeToFile(README, renderedMarkdown) {
  fs.writeFile(README, renderedMarkdown, (err) =>
    err ? console.error(err) : console.log("README generated")
  );
}

//initialize project.  Asks questions in the terminal
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "questionsTitle",
      },
      {
        type: "input",
        message: questions[1],
        name: "questionsDescr",
      },
      {
        type: "input",
        message: questions[2],
        name: "questionsInstall",
      },
      {
        type: "input",
        message: questions[3],
        name: "questionsUsage",
      },
      {
        type: "list",
        message: questions[4],
        choices: [
          "MIT License",
          "ISC License",
          "Apache License 2.0",
          "GNU General Public License v3.0",
        ],
        name: "questionsLicense",
      },
      {
        type: "input",
        message: questions[5],
        name: "questionsContribution",
      },
      {
        type: "input",
        message: questions[6],
        name: "questionsTesting",
      },
      {
        type: "input",
        message: questions[7],
        name: "questionsGitHubUser",
      },
      {
        type: "input",
        message: questions[8],
        name: "questionsEmailAddress",
      },
    ])
    //asynchronous function that acts when a response comes back.  Uses the data to create markdown file
    .then((response) => {
      const README = "README.md";
      const renderedMarkdown = markdownTemplate(response);
      writeToFile(README, renderedMarkdown);
    });
}

init();
//figure out how to REQUIRE RESPONSE in node.
