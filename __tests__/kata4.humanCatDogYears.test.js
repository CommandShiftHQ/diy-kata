const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns human, dog and cat years', () => {
      expect(humanCatDogYears(5)).toEqual([5, 32 , 35]);
    });
});