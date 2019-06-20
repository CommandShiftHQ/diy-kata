const reachDestination = require('../src/kata5.reachDestination.js');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(80, 20)).toBe(`I will arrive in 4 hours`)
    expect(reachDestination(23, 8)).toBe(`I will arrive in 3 hours`)
    expect(reachDestination(50, 5)).toBe(`I will arrive in 10 hours`)
    expect(reachDestination(44, 6)).toBe(`I will arrive in 7.5 hours`)
    });
});
