const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, employeeID, email, school) {
    super(name, employeeID, email);
    // this.name = name;
    // this.employeeID = employeeID;
    // this.email = email;
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern"; //or just class name?
  }
}
