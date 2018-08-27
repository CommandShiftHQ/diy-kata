const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('should return Yes if true', () => {
  expect(booleanToWord(true)).toEqual('Yes')
  });

  it('should return No if false', () => {
    expect(booleanToWord(false)).toEqual('No')
  });
});