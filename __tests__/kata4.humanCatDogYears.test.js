const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns human, dog and cat years', () => {
      expect(humanCatDogYears(humanCatDogYears.number)).toEqual(humanCatDogYears.number);
    });
});