const getEmployerRole = (employeeName, employees) => {

  return employees.find(elem => elem.name === employeeName).role;

};

module.exports = getEmployerRole
