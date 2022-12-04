const Engineer = require("../lib/engineer");
const Index = require("../index");

//describe("Engineer", () => {
//test for all use cases when initializing a new engineer object
//describe("Initialization", () => {
test("should create an object with a name, employeeID, email, and github username", () => {
  const engineer = new Engineer(
    "Engineer",
    "Dwight",
    "1234",
    "dwight@gmail.com",
    "dwight762"
  );
  const role = "Engineer";
  expect(engineer.getRole()).toBe(role);
  expect(engineer.name).toBe("Dwight");
  expect(engineer.employeeID).toBe("1234");
  expect(engineer.email).toBe("dwight@gmail.com");
  expect(engineer.githubUsername).toBe("dwight762");
});

/*
});

    it("should throw an error if provided no arguments", () => {
      const callBack = () => new Engineer();
      expect(callBack).toThrow();
    });
    it("should throw an error if provided fewer than 4 arguments", () => {
      const callBack = () => new Engineer("Dwight", "1234", "dwight@gmail.com");
      const err = new Error("Expect four arguments");
      //ASSERT
      expect(callBack).toThrowError(err);
   });*/
//});
//});
