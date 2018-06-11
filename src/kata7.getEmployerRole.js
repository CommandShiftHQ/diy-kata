const getEmployerRole = (employeeName, employees) => {
  const nameArray = employeeName.map(function(x) {
    return x.role
 });



return getEmployerRole('Javid', employees);

};


module.exports = getEmployerRole
