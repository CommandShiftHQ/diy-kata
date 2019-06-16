const { getEmployerRole } = require('../src');

describe('getEmployerRole', () => {
const employees = [{

    name: 'Holly',
  
    role: 'Category Manager'
  
  }, {
  
    name: 'Larysa',
  
    role: 'Key Account Manager'
  
  }, {
  
    name: 'Jack',
  
    role: 'Customer Services'
  
  }];

  it('returns the employee\'s role in the company', () => {
    expect(getEmployerRole('Holly',employees)).toEqual('Category Manager')
    expect(getEmployerRole('Larysa',employees)).toEqual('Key Account Manager')
  });
});
