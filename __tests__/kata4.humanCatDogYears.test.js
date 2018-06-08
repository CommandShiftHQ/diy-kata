const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('should return an array of three numbers. The first number is human years, second is the equivalent cat years, third is the equivalent dog years.', () => {
        expect(humanCatDogYears(31)).toEqual([31,140,169])
    });

});