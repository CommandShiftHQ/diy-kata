
const humanCatDogYears = require('../src/kata4.humanCatDogYears.js');

describe('humanCatDogYears', () => {
    it('returns an array of cats and dogs years, when pass it number of human years', () => {
      expect(humanCatDogYears(7)).toEqual([7, 44, 49])
      expect(humanCatDogYears(20)).toEqual([20, 96, 114])
      expect(humanCatDogYears(12)).toEqual([12, 64, 74])
    });
  });
