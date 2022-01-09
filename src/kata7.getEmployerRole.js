const getEmployerRole = (employeeName, employees) => {
  return employees.find((element) => element.name === employeeName).role;
};

module.exports = getEmployerRole;
