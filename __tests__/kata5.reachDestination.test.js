const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44,10)).toEqual(3)
    expect(reachDestination(67,24)).toEqual(3)
  });
});
