const humanCatDogYears = require('../src/kata4.humanCatDogYears');

describe('humanCatDogYears', () => {
it('returns human, cat and dog years', () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    expect(humanCatDogYears(4)).toEqual([4, 32, 34]);
})
});