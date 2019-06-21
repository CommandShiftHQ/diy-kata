const { joinNames } = require('../src');

describe('joinNames', () => {
  
  const objectsArray = [{
    name: 'Bart'
  }, {
    name: 'Lisa'
  }, {
    name: 'Maggie'
  }]
  
  const objectsArray2 = [{
    name: 'Jack'
  }]

  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames(objectsArray)).toBe('Bart, Lisa & Maggie');
  });

  it('will return single name and no ampersand if objects array has only 1 object', () => {
    expect(joinNames(objectsArray2)).toBe('Jack');
  });
});
