const booleanToWord = require('../src/kata2.booleanToWord.js')

describe('booleanToWord', () => {
  it ('returns true when passed yes', () => { 
    expect(booleanToWord('yes')).toBe(true)
  })
});
