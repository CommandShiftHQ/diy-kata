const getEmployerRole = (employeeName, employees) => {

  return employees.find(empRole => empRole.name === employeeName).role;

};

module.exports = getEmployerRole;
