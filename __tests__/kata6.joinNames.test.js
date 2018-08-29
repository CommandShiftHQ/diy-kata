const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }]
    )).toBe('Bart, Lisa & Maggie');

    expect(joinNames([{
      name: 'John'
    }, {
      name: 'Paul'
    }, {
      name: 'George'
    }, {
      name: 'Ringo'
    }]
    )).toBe('John, Paul, George & Ringo');

    expect(joinNames([{
      name: 'Leonardo'
    }, {
      name: 'Donatello'
    }, {
      name: 'Raphael'
    }, {
      name: 'Michaelangelo'
    }]
    )).toBe('Leonardo, Donatello, Raphael & Michaelangelo');

  });
});
