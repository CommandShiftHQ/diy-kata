const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns and array of numbers of human, cat and dog years', () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15])
        expect(humanCatDogYears(2)).toEqual([2, 24, 24])
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    });
    it('decimal points test', () => {
        expect(humanCatDogYears(2.5)).toEqual([2.5, 26, 26.5])
    });
});
