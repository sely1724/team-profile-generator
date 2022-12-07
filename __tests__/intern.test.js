const Intern = require("../lib/intern");

describe("Testing Intern Class", () => {
  it("parameters are name, id, email, and university", () => {
    const intern = new Intern(
      "Dwight",
      "1234",
      "dwight@gmail.com",
      "Michigan State"
    );

    expect(intern.name).toBe("Dwight");
    expect(intern.employeeID).toBe("1234");
    expect(intern.email).toBe("dwight@gmail.com");
    expect(intern.school).toBe("Michigan State");
  });
  it("should call methods to get intern name, email, role, and University", () => {
    //ARRANGE
    const intern = new Intern(
      "Dwight",
      "1234",
      "dwight@gmail.com",
      "Michigan State"
    );

    //ACT
    intern.getName();
    intern.getId();
    intern.getEmail();
    intern.getSchool();
    intern.getRole();

    //ASSERT
    expect(intern.getName()).toBe("Dwight");
    expect(intern.getId()).toBe("1234");
    expect(intern.getEmail()).toBe("dwight@gmail.com");
    expect(intern.getSchool()).toBe("Michigan State");
    expect(intern.getRole()).toBe("Intern");
  });
});
