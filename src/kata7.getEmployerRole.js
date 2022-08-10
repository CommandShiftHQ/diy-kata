const getEmployerRole = (employeeName, employees) => {
    let employee = employees.find(element => element.name === employeeName);
    return employee.role;
};

module.exports = getEmployerRole;
