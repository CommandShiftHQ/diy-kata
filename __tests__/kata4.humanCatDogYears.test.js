import { humanCatDogYears } from '../src'

describe('humanCatDogYears', () => {
    it('returns array of human, cat and dog years when passed human years', () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
        expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    })
})
