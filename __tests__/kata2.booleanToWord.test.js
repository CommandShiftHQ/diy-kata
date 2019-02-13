const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('translates boolean values to words yes and no', () => {
    expect(booleanToWord(true)).toBe('Yes')
    expect(booleanToWord(false)).toBe('No')
  });
});
