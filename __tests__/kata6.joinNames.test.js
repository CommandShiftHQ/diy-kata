const joinNames = require('../src/kata6.joinNames');

describe('joinNames', () => {
  const obj1 = [{

    name: 'Bart'
  
  }, {
  
    name: 'Lisa'
  
  }, {
  
    name: 'Maggie'
  
  }];

  const obj2 = [{

    name: 'Joy'
  
  }, {
  
    name: 'Paramita'
  
  }, {
  
    name: 'Krishna'
  
  },{
  
    name: 'Luke'
  
  }];
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames(obj1)).toEqual('Bart, Lisa & Maggie');
    expect(joinNames(obj2)).toEqual('Joy, Paramita, Krishna & Luke')
  });
});
