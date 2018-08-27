const getEmployerRole = (employeeName, employees) => {
  let selectedEmployee;
	employees.forEach(obj => {
        if (obj.name === employeeName) {
            selectedEmployee = obj.role;
        }
    })
	return selectedEmployee;
}

module.exports = getEmployerRole
