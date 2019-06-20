const humanCatDogYears = require('../src/kata4.humanCatDogYears.js');

describe('humanCatDogYears', () => {
    it('returns an array of human years cat years and dog years', () => {
      expect(humanCatDogYears(12)).toEqual([12, 64, 74])
      expect(humanCatDogYears(4)).toEqual([4, 32, 34])
      expect(humanCatDogYears(7)).toEqual([7, 44, 49])
    });
  });
