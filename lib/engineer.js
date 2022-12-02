const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, employeeID, email, githubUsername) {
    super(name, employeeID, email);
    // this.name = name;
    // this.employeeID = employeeID;
    // this.email = email;
    this.githubUsername = githubUsername;
  }

  getGithub() {
    return this.githubUsername;
  }
  getRole() {
    return "Engineer";
  } ////or just class name?
}
//do I need to export? Or is that linked to employee?
module.exports = Engineer;
