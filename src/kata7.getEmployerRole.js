const { employees } = require("./data");


  const getEmployerRole = (employeeName, employees) => {
    const foundemployees = employees.find(employee => employee.name === employeeName).role;
    console.log(foundemployees);
    return foundemployees;

}; 


getEmployerRole("Satti", employees)

module.exports = getEmployerRole;
