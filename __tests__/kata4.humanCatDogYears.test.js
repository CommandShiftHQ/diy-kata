const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns array of cat, human and dog ages', () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    });

    it('returns array of cat, human and dog ages even if less than 3', () => {
        expect(humanCatDogYears(2)).toEqual([2, 24, 24])
    });
});
