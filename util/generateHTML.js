const generateTeam = (employee) => {
  const generateManager = (manager) => {
    return `
    <div class = "card">
    <h2 class = "employee-name"> ${manager.getName()}</h2>
    </div>   
    `;
  };

  const employeeData = [];
  employeeData.push(employee.map((manager) => generateManager(manager)));
  console.log(employeeData);
  return employeeData.join("");
};
// export function to generate entire page
module.exports = (employee) => {
  return `${generateTeam(employee)}`;
};
