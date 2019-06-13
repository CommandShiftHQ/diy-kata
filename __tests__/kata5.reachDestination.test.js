const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44,10)).toEqual('I should be there in 4.5 hours.')
    expect(reachDestination(36,7)).toEqual('I should be there in 5 hours.')  
  });
});
