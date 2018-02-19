import { humanCatDogYears } from '../src'

describe('humanCatDogYears', () => {
  it('returns array of human, cat and dog years when passed human years', () => {
      expect(humanCatDogYears(10)).toBe([10, 56, 64])
      // humanCatDogYears(10) should return [10, 56, 64]
  })
})
// When humanCatDogYears is passed a number (representing human years) should return.