import { humanCatDogYears } from '../src'

describe('humanCatDogYears', () => {
    it('returns an array of human cat and dog years when human years is passed', () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64])  
    })
  })
 