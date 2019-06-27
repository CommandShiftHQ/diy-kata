const joinNames  = require('../src/kata6.joinNames');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    const data = [{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }];
    expect(joinNames(data)).toEqual('Bart, Lisa & Maggie');
  });
});
