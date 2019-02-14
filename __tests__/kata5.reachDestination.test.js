const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.')
    expect(reachDestination(37, 8)).toBe('I should be there in 5 hours.')
    expect(reachDestination(107, 14)).toBe('I should be there in 8 hours.')
  });
});
