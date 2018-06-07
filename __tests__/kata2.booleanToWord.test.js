const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('should return yes if it is fed true', () => {
      expect(booleanToWord(true)).toBe('yes')
  });

  it('should return no if it is fed false', () => {
    expect(booleanToWord(false)).toBe('no')
  });

  it('should return error if it is an irellevant value', () => {
    expect(booleanToWord(3)).toBe('error')
  });

});
