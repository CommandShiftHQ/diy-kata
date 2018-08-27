const { getEmployeeRole } = require('../src');

describe('getEmployeeRole', () => {
  it('returns the employee\'s role in the company', () => {
    const georgia = {
      name: 'georgia',
      role: 'student'
    };

    const matty = {
      name: 'matty',
      role: 'student'
    };

    expect(getEmployeeRole('georgia', [georgia, matty])).toEqual(georgia.role);
  });
});
