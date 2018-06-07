const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  // how do we create specs again???

it('returns Yes when booleanToWord is True',() => {
  expect(booleanToWord(true)).toBe('Yes')
});

it('returns No when booleanToWord is False', () => {
  expect(booleanToWord(false)).toBe('No')
});

});