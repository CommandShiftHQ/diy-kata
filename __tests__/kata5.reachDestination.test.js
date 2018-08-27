const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(5, 9)).toEqual("45");
  });
});
