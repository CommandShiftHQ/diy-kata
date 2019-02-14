const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    const namesObj = [
      {

        name: 'Bart'
      
      }, {
      
        name: 'Lisa'
      
      }, {
      
        name: 'Maggie'
      
      }
    ];
    expect(joinNames(namesObj)).toEqual('Bart, Lisa & Maggie')
  });
});
