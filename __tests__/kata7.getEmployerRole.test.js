const { getEmployerRole } = require('../src');

describe('getEmployerRole', () => {
  it('returns the employee\'s role in the company', () => {
    expect(getEmployerRole([{
      name: 'Satti',
      role: 'Developer'
    }, {
      name: 'Jenny',
      role: 'Sales Associate'
    }, {
      name: 'Javid',
      role: 'Human Resources Assistant'
    }]
    )).toBe('Developer');

    expect(getEmployerRole([{
      name: 'Satti',
      role: 'Developer'
    }, {
      name: 'Jenny',
      role: 'Sales Associate'
    }, {
      name: 'Javid',
      role: 'Human Resources Assistant'
    }]
    )).toBe('Sales Associate');

    expect(getEmployerRole([{
      name: 'Satti',
      role: 'Developer'
    }, {
      name: 'Jenny',
      role: 'Sales Associate'
    }, {
      name: 'Javid',
      role: 'Human Resources Assistant'
    }]
    )).toBe('Human Resources Assistant');


  });
});
