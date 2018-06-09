const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44,10)).toEqual('4.5')
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(32,8)).toEqual('4')
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(69,7)).toEqual('10')
  });

});
