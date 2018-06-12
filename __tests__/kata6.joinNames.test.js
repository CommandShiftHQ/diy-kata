const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }])).toBe('Bart, Lisa, & Maggie')

  });

  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames([{
      name: 'Bill'
    }, {
      name: 'Linda'
    }, {
      name: 'Bruce'
    }, {
      name: 'Dave'
    }, {
      name: 'Geoff'
    }, {
      name: 'Bernard'
    }])).toBe('Bill, Linda, Bruce, Dave, Geoff, & Bernard')

  });

  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames([{
      name: 'James'
    }, {
      name: 'Ken'
    }, {
      name: 'Helen'
    }, {
      name: 'Doris'
    }, {
      name: 'Glenda'
    }, {
      name: 'Piere'
    }, {
      name: 'Nico'
    }, {
      name: 'Jann'
    }, {
      name: 'Wendy'
    }])).toBe('James, Ken, Helen, Doris, Glenda, Piere, Nico, Jann, & Wendy')

  });
});
