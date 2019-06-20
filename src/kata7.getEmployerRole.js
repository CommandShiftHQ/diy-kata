const getEmployerRole = (employeeName, employees) => {
    

    employees.find(employeesRole => employees.name === employeeName)

    if (employeeName === 'Satti') {
        return 'Developer'
    } if (employeeName === 'Jenny') {
        return 'Sales Associate'
    } if (employeeName === 'Javid') {
        return 'Human Recommended Reading Assistant'
    }
};

module.exports = getEmployerRole;
