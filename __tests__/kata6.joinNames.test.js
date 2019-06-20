const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    const names1 = [{
        name: 'Bart'
  }, {
        name: 'Lisa'
  }, {
        name: 'Maggie'
  }]
    const names2 = 
        [{
        name: 'Rob'
  }, {
        name: 'Bob'
  }, {
        name: 'Lob'
  }, {
        name: 'Stew'
      }]
      expect(joinNames(['Bart','Lisa','Maggie'])).toBe('Bart, Lisa & Maggie')
      expect(joinNames(['Rob','Bob','Lob','Stew'])).toBe('Rob, Bob, Lob & Stew')  
             })
          });
          