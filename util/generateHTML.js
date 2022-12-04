const generateTeam = (allEmployees) => {
  const generateManager = (manager) => {
    return `
    <div class = "card">
    <h2 class = "employee-name">${manager.getName()}</h2>
    </div>   
    `;
  };

  const employeeData = [];
  employeeData.push(
    allEmployees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  console.log(employeeData);
  console.log(allEmployees);
};

function finalizeData(allEmployees) {
  return `${generateTeam(allEmployees)}`;
}
// export function to generate entire page
module.exports = finalizeData;
