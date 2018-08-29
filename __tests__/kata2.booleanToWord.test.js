const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
it('Returns Yes when passed a boolean that equals true', () => {
    expect(booleanToWord(true)).toBe('Yes')
});

it('returns No when passed a boolean that equals false', () => {
  expect(booleanToWord(false)).toBe('No')
});

});
