const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns human, dog and cat years', () => {
      expect(humanCatDogYears(10)).toEqual([10, 56 , 64]);
    });
});