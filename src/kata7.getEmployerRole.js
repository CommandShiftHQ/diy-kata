const getEmployerRole = (employeeName, employees) => {
  let object = employees.find(obj => obj.name == employeeName);
  return object.role
}

module.exports = getEmployerRole
