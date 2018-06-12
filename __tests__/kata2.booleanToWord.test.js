const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('should return yes if it is fed true', () => {
      expect(booleanToWord(true)).toBe('yes');
      expect(booleanToWord(false)).toBe('no');
      expect(booleanToWord(3)).toBe('error');
  });

});
