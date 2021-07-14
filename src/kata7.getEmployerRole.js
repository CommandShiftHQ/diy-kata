const getEmployerRole = (employeeName, employees) => employees.find(person => 
    person.name === employeeName).role;

module.exports = getEmployerRole;
