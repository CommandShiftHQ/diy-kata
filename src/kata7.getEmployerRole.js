const getEmployerRole = (employeeName, employees) => { 
	const employee = employees.find(employee => employee.name === employeeName)
		return employee.role
};
	
module.exports = getEmployerRole
