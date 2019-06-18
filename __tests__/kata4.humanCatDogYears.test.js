const humanCatDogYears = require('../src/kata4.humanCatDogYears');

describe('humanCatDogYears',() => {
    const expected1 = [10, 56, 64];
    const expected2 = [20, 96, 114];
 it('returns an array of human, cat and dog years when passed human years', () => {
    expect(humanCatDogYears(10)).toEqual(expected1);
    expect(humanCatDogYears(20)).toEqual(expected2);
 });
});
