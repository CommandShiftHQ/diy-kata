const { reachDestination } = require('../src');

describe('reachDestination', () => {

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours')
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(58, 18)).toBe('I should be there in 3.5 hours')
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(67, 23)).toBe('I should be there in 3.0 hours')
  });
});
