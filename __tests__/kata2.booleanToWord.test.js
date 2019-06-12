const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('returns Yes when passed a True boolean', () =>{
    expect(booleanToWord(true)).toBe('Yes')
  
});

it('returns No when passed a False boolean', () =>{
  expect(booleanToWord(false)).toBe('No')
  });
});
