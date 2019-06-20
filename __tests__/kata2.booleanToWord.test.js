const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  // how do we create specs again???
  it('returns yes if the boolean is true', () => {
    expect(booleanToWord(true)).toBe('Yes')
  });

  it('returns no if the boolean is false', () => {
    expect(booleanToWord(false)).toBe('No')
  });

});
