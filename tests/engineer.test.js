const Engineer = require("../lib/engineer");

test("Ensuring GitHub User Instance is created", () => {
  const engineer = new Engineer(
    "Dwight",
    "1234",
    "dwight@gmail.com",
    "dwight762"
  );

  expect(engineer.githubUsername).toBe("dwight762");
});

test("Ensuring user entered GitHub Username can be fetched", () => {
  const engineer = new Engineer(
    "Dwight",
    "1234",
    "dwight@gmail.com",
    "dwight762"
  );

  expect(engineer.getGithub()).toBe("dwight762");
});

test("Ensuring engineer role can be fetched when new object created", () => {
  const engineer = new Engineer(
    "Dwight",
    "1234",
    "dwight@gmail.com",
    "dwight762"
  );
  expect(engineer.getRole()).toBe("Engineer");
});
