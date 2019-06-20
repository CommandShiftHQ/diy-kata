const getEmployerRole = (employeeName, employees) => {
    const person = employees.find(person => person.name === employeeName)
    return person.role
};
module.exports = getEmployerRole
