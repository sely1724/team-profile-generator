//Require in main employee class
const Employee = require("./employee");
//Create Engineer subclass
class Engineer extends Employee {
  constructor(name, employeeID, email, githubUsername) {
    super(name, employeeID, email);
    this.githubUsername = githubUsername;
  }
  getGithub() {
    return this.githubUsername;
  }
  getRole() {
    return "Engineer";
  }
}
//Export
module.exports = Engineer;
