const { joinNames } = require('../src');

describe('joinNames', () => {
const names = [
  {
    name: 'Holly'
  },
  {
    name: 'Thomas'
  },
  {
    name: 'Angela'
  },
  {
    name: 'Norman'
  }
];

const names2 = [
  {
    name: 'Holly'
  },
  {
    name: 'Dee'
  },
  {
    name: 'Trudie'
  }
];

  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames(names)).toEqual('Holly, Thomas, Angela & Norman')
    expect(joinNames(names2)).toEqual('Holly, Dee & Trudie')
  });
});
