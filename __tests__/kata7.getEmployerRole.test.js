const getEmployerRole = require('../src/kata7.getEmployerRole');

describe('getEmployerRole', () => {
  const employees = [{
    name: 'Javid',
    role: 'Human Recommended Reading Assistant'
  }];
  it('returns the employee\'s role in the company', () => {
  expect(getEmployerRole('Javid', employees).toEqual('Human Recommended Reading Assistant'))
  });
});
