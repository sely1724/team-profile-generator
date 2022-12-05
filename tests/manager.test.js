const Manager = require("../lib/manager");

test("Ensuring Office Number instance is created", () => {
  const manager = new Manager("Dwight", "1234", "dwight@gmail.com", "1234");

  expect(manager.officeNumber).toBe("1234");
});

test("Ensuring user entered office number can be fetched", () => {
  const manager = new Manager("Dwight", "1234", "dwight@gmail.com", "1234");
  expect(manager.getOfficeNumber()).toBe("1234");
});

test("Ensuring manager role can be fetched when new object created", () => {
  const manager = new Manager("Dwight", "1234", "dwight@gmail.com", "1234");

  expect(manager.getRole()).toBe("Manager");
});
