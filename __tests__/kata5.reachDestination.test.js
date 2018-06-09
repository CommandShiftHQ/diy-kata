const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(80,120)).toBe(`I should be there in about 1 hour`)
  });
});
