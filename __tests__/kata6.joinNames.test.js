const joinNames = require('../src/kata6.joinNames.js');



describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames(['Bart','Lisa','Maggie'])).toBe('Bart, Lisa & Maggie')
  });

  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames(['Rob','Jon','Sansa','Arya','Bran','Rickon'])).toBe('Rob, Jon, Sansa, Arya, Bran & Rickon')
})
});
