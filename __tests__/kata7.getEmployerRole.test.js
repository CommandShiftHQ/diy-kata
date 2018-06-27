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

  it('should return the role property of the relevant object in the array' , () => {
    expect(getEmployerRole('Satti', employees)).toBe('Developer');
    expect(getEmployerRole('Jenny', employees)).toBe('Sales Associate');
    expect(getEmployerRole('Javid', employees)).toBe('Human Resources Assistant');
  });

});
