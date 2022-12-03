const generateTeam = (team) => {
  console.log(team);
  return team;
};
// export function to generate entire page
module.exports = (team) => {
  return `${generateTeam(team)}`;
};
