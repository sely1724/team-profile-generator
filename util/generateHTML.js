const generateTeam = (allEmployees) => {
  const generateManager = (manager) => {
    return `
    <div class = "card">
    <h2 class = "employee-name">${manager.getName()}</h2>
    </div>   
    `;
  };

  const generateIntern = (intern) => {
    return `
    <div class = "card">
    <h2 class = "employee-name">${intern.getName()}</h2>
    </div>   
    `;
  };

  const generateEngineer = (engineer) => {
    return `
    <div class = "card">
    <h2 class = "employee-name">${engineer.getName()}</h2>
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

  console.log(employeeData);
  console.log(allEmployees);
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
    <link rel="stylesheet" href="./style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    </head>

    <body>
    <!--header-->
    <header class = "text-center">
    <h1 class = "mb-2">My Team</h1>
    </header>

    <!--container for cards start-->
    <section class = "container-fluid">

    
    <!--container for cards end-->
    </section>
    


<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="./assets/script.js"></script>
  
</body>
</html>
  
  
  
  
  
  
  
  
  
  
  
  ${generateTeam(allEmployees)}`;
}
// export function to generate entire page
module.exports = finalizeData;
