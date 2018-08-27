const getEmployeeRole = (employeeName, employees) => {
    for (let i = 0; i < employees.length; i++)
    if (employeeName === employees[i].name){
        return employees[i].role;
    } else {
        return "Does not work here!";
    }
}

module.exports = getEmployeeRole
