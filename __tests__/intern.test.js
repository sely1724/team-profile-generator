const Intern = require("../lib/intern");

test("Ensuring University Instance is created", () => {
  const intern = new Intern(
    "Dwight",
    "1234",
    "dwight@gmail.com",
    "jacksonville"
  );

  expect(intern.school).toBe("jacksonville");
});

test("Ensuring user entered university can be fetched", () => {
  const intern = new Intern(
    "Dwight",
    "1234",
    "dwight@gmail.com",
    "jacksonville"
  );

  expect(intern.getSchool()).toBe("jacksonville");
});

test("Ensuring intern role can be fetched when new object created", () => {
  const intern = new Intern(
    "Dwight",
    "1234",
    "dwight@gmail.com",
    "jacksonville"
  );
  expect(intern.getRole()).toBe("Intern");
});
