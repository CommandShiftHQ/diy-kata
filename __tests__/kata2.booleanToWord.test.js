const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('returns boolean to word', () => {
    expect(booleanToWord(true)).toEqual('Yes');
  });
  it('returns boolean to word', () => {
    expect(booleanToWord(false)).toEqual('No');
  });
});