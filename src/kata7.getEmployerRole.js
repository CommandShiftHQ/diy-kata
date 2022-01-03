const getEmployerRole = (employeeName, employees) => {
  const employeeObject = employees.find(
    (element) => element.name === employeeName
  );
  return employeeObject.role;
};

module.exports = getEmployerRole;
