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
  } ////or just class name?
}
