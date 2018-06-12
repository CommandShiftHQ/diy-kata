const { getEmployerRole } = require('../src');

describe('getEmployerRole', () => {

  const employees = [{
    name: 'Satti',
    role: 'Developer'
  }, {
    name: 'Jenny',
    role: 'Sales Associate'
  }, {
    name: 'Javid',
    role: 'Human Resources Assistant'
  }];

it('returns the employee\'s role in the company', () => {
  expect (getEmployerRole('Satti', employees)).toBe('Developer');
  expect (getEmployerRole('Jenny', employees)).toBe('Sales Associate');
  expect (getEmployerRole('Javid', employees)).toBe('Human Resources Assistant');
});
});
