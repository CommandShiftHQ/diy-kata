const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with arrival time in minutes when passed a lower distance than speed', () => {
    expect(reachDestination(10, 50)).toEqual('Your estimated time of arrival will be 12 minutes')
  });

  it('returns string with arrival time in minutes', () => {
  expect(reachDestination(520, 65)).toEqual('Your estimated time of arrival will be 8 hours')
  });

  it('returns a string with one hour arrival time when distance & speed are the same', () => {
    expect(reachDestination(30, 30)).toEqual('Your estimated time of arrival will be 1 hour')
  });

});
