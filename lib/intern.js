//Require in main employee class
const Employee = require("./employee");
//Create Intern subclass
class Intern extends Employee {
  constructor(name, employeeID, email, school) {
    super(name, employeeID, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
//Export
module.exports = Intern;
