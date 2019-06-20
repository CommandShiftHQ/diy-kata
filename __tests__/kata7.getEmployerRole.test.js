const getEmployerRole = require('../src/kata7.getEmployerRole.js');
const employees = [{
  name: 'Satti',
  role: 'Developer'
}, {
  name: 'Jenny',
  role: 'Sales Associate'
}, {
  name: 'Javid',
  role: 'Human Recommended Reading Assistant'
}]

describe('getEmployerRole', () => {
  it('returns the employee\'s role in the company', () => {
    const employeeName = 'Jenny'
    const employeeRole = getEmployerRole(employeeName, employees)
    expect(getEmployerRole('Jenny', employees)).toBe('Sales Associate')
  });
});
