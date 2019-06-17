const booleanToWord = require('../src/kata2.booleanToWord');

describe('booleanToWord', () => {
  it('returns \'Yes\' when passed true',() => {
    expect(booleanToWord(true)).toEqual(true)
  });

  it('returns \'False\' when passed false',() => {
    expect(booleanToWord(false)).toEqual(false)
  });
});
