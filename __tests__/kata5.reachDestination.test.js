const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toBe('4.5');
    expect(reachDestination(32, 8)).toBe('4');
    expect(reachDestination(69, 7)).toBe('10');
  });

});
