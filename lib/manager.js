//Require in main employee class
const Employee = require("./employee");
//Create manager subclass
class Manager extends Employee {
  constructor(name, employeeID, email, officeNumber) {
    super(name, employeeID, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
//Export
module.exports = Manager;
