const getEmployerRole = (employeeName, employees) => {
for (let i = 0; i<employees.length; i++)
{
    if(employees[i].name === employeeName)
    {console.log( employees[i].role)}
}
};

const employees = [{
    name: 'Satti',
    role: 'Developer'
  }, 
  {
    name: 'Jenny',
    role: 'Sales Associate'
  }, 
  {
    name: 'Javid',
    role: 'Human Recommended Reading Assistant'
  }];

  getEmployerRole('Javid',employees);


module.exports = getEmployerRole;
