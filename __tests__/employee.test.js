const Employee = require("../lib/employee");

test("Ensuring name instance is created", () => {
  const employee = new Employee("Dwight", "1234", "dwight@gmail.com");

  expect(employee.name).toBe("Dwight");
});

test("Ensuring employeeID instance is created", () => {
  const employee = new Employee("Dwight", "1234", "dwight@gmail.com");

  expect(employee.employeeID).toBe("1234");
});

test("Ensuring email instance is created", () => {
  const employee = new Employee("Dwight", "1234", "dwight@gmail.com");

  expect(employee.email).toBe("dwight@gmail.com");
});

test("Ensuring user entered name can be fetched", () => {
  const employee = new Employee("Dwight", "1234", "dwight@gmail.com");

  expect(employee.getName()).toBe("Dwight");
});

test("Ensuring user entered employee ID can be fetched", () => {
  const employee = new Employee("Dwight", "1234", "dwight@gmail.com");

  expect(employee.getId()).toBe("1234");
});

test("Ensuring user entered email can be fetched", () => {
  const employee = new Employee("Dwight", "1234", "dwight@gmail.com");

  expect(employee.getEmail()).toBe("dwight@gmail.com");
});

test("Ensuring role can be fetched", () => {
  const employee = new Employee("Dwight", "1234", "dwight@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
