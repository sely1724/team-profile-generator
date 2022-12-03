const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, employeeID, email, officeNumber) {
    super(name, employeeID, email);
    // this.name = name;
    // this.employeeID = employeeID;
    // this.email = email;
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  ////or just class name?
}
//do I need to export? Or is that linked to employee?
module.exports = Manager;
