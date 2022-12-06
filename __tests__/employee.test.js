const Employee = require("../lib/employee");

describe("Testing Employee Class", () => {
  it("parameters are name, id, and email", () => {
    const employee = new Employee("Dwight", "1234", "dwight@gmail.com");

    expect(employee.name).toBe("Dwight");
    expect(employee.employeeID).toBe("1234");
    expect(employee.email).toBe("dwight@gmail.com");
  });
  it("should call methods to get employee name, email, and role", () => {
    //ARRANGE
    const employee = new Employee("Dwight", "1234", "dwight@gmail.com");

    //ACT
    employee.getName();
    employee.getId();
    employee.getEmail();
    employee.getRole();

    //ASSERT
    expect(employee.getName()).toBe("Dwight");
    expect(employee.getId()).toBe("1234");
    expect(employee.getEmail()).toBe("dwight@gmail.com");
    expect(employee.getRole()).toBe("Employee");
  });
});
