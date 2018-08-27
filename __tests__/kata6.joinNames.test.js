const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames(['a', 'b', 'c', 'd'])).toEqual('a, b, c & d');
  });
});
