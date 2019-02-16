const getEmployerRole = (employeeName, employees) => {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name === employeeName) {
            return employees[i].role;
        }
    }
};

module.exports = getEmployerRole
