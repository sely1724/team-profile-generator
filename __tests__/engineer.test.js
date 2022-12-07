const Engineer = require("../lib/engineer");

describe("Testing Engineer Class", () => {
  it("parameters are name, id, email, and github username", () => {
    const engineer = new Engineer(
      "Dwight",
      "1234",
      "dwight@gmail.com",
      "dwight762"
    );

    expect(engineer.name).toBe("Dwight");
    expect(engineer.employeeID).toBe("1234");
    expect(engineer.email).toBe("dwight@gmail.com");
    expect(engineer.email).toBe("dwight@gmail.com");
    expect(engineer.githubUsername).toBe("dwight762");
  });
  it("should call methods to get employee name, email, role, and github username", () => {
    //ARRANGE
    const engineer = new Engineer(
      "Dwight",
      "1234",
      "dwight@gmail.com",
      "dwight762"
    );

    //ACT
    engineer.getName();
    engineer.getId();
    engineer.getEmail();
    engineer.getGithub();
    engineer.getRole();

    //ASSERT
    expect(engineer.getName()).toBe("Dwight");
    expect(engineer.getId()).toBe("1234");
    expect(engineer.getEmail()).toBe("dwight@gmail.com");
    expect(engineer.getGithub()).toBe("dwight762");
    expect(engineer.getRole()).toBe("Engineer");
  });
});
