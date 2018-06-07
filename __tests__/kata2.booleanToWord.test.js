const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('should return yes if it is a truthy value', () => {
      expect(booleanToWord(true)).toBe('yes')
  });

  it('should return no if it is a falsey value', () => {
    expect(booleanToWord(false)).toBe('no')
  });  
});