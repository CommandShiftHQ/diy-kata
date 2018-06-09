const { humanCatDogYears } = require('../src');

describe('returns human years, cat years and dog years when passed number', () => {

it('should return an array of [10,56,64] when passed 10', () => {
  expect(humanCatDogYears(10)).toEqual([10, 56, 64])
});

it('should return an array of [1,15,15] when passed 1 human year', () => {
  expect(humanCatDogYears(1)).toEqual([1,15,15])
});

it('should return an array of [2,24,25] when passed 2 human years ', () => {
  expect(humanCatDogYears(2)).toEqual([2,24,25])
});

});

module.exports = humanCatDogYears;
