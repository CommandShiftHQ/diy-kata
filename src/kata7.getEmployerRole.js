const getEmployerRole = (employeeName, employees) => {
    for (employee of employees) {
        if (employee === employeeName) {
            return getEmployerRole;
        }
    }
};

module.exports = getEmployerRole;