const Manager = require("../lib/manager");

describe("Testing Manager Class", () => {
  it("parameters are name, id, email, and office number", () => {
    const manager = new Manager("Dwight", "1234", "dwight@gmail.com", "108");

    expect(manager.name).toBe("Dwight");
    expect(manager.employeeID).toBe("1234");
    expect(manager.email).toBe("dwight@gmail.com");
    expect(manager.officeNumber).toBe("108");
  });
  it("should call methods to get intern name, email, role, and University", () => {
    //ARRANGE
    const manager = new Manager("Dwight", "1234", "dwight@gmail.com", "108");

    //ACT
    manager.getName();
    manager.getId();
    manager.getEmail();
    manager.getOfficeNumber();
    manager.getRole();

    //ASSERT
    expect(manager.getName()).toBe("Dwight");
    expect(manager.getId()).toBe("1234");
    expect(manager.getEmail()).toBe("dwight@gmail.com");
    expect(manager.getOfficeNumber()).toBe("108");
    expect(manager.getRole()).toBe("Manager");
  });
});
