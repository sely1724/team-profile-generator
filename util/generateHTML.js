const generateTeam = (allEmployees) => {
  const generateManager = (manager) => {
    return `
    <div class="card">
    <div class="card-body">
      <h4 class="card-title">${manager.getName()}</h4>
      <h5 class="card-title">${manager.getRole()}</h5>
      <p>ID Number: ${manager.getId()}</p>
      <p>Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
      <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
  </div> 
    `;
  };

  const generateIntern = (intern) => {
    return ` 
    <div class="card">
    <div class="card-body">
      <h4 class="card-title">${intern.getName()}</h4>
      <h5 class="card-title">${intern.getRole()}</h5>
      <p>ID Number: ${intern.getId()}</p>
      <p>Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
      <p>University: ${intern.getSchool()}</p>
    </div>
  </div> 
    `;
  };

  const generateEngineer = (engineer) => {
    return `
    <div class="card">
    <div class="card-body">
      <h4 class="card-title">${engineer.getName()}</h4>
      <h5 class="card-title">${engineer.getRole()}</h5>
      <p>ID Number: ${engineer.getId()}</p>
      <p>Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
      <p>Github:<a href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a> </p>
    </div>
  </div> 
    `;
  };

  const employeeData = [];
  employeeData.push(
    allEmployees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  employeeData.push(
    allEmployees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );

  employeeData.push(
    allEmployees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  return employeeData.join("");
  //console.log(employeeData);
  //console.log(allEmployees);
};

function finalizeData(allEmployees) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>

    <!--css connect-->
    <link rel="stylesheet" href="./dist/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
  </head>

  <body>
    <!--header-->
    <header class="container-fluid bg-dark">
      <div class="row justify-content-center">
        <h1 class="text-white">My Team</h1>
      </div>
    </header>

    <!--container for cards start-->
    <section class="container">
      <div class="card-deck">
  
  
  ${generateTeam(allEmployees)}
  
  </div>

  <!--container for cards end-->
</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="./index.js"></script>
</body>
</html>
  
  
  
  
  
  
  
  
  
  
  
  
  `;
}
// export function to generate entire page
module.exports = finalizeData;
