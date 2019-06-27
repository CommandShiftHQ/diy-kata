const booleanToWord = require('../src/kata2.booleanToWord');

describe('booleanToWord', () => {
  it('test booleanToWord', () => {
    expect(booleanToWord(true)).toBe('Yes');
    expect(booleanToWord(false)).toBe('No');
  })
});
