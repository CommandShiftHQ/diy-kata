const { humanCatDogYears } = require('../src');
describe('humanCatDogYears', () =>{ 
    it('returns an array of human, cat & dog years')
    expect(humanCatDogYears(10)).toEqual([10,56,64])
});

