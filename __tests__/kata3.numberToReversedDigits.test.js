import { numberToReversedDigits } from '../src'

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1])
    expect(numberToReversedDigits(246810)).toEqual([0, 1, 8, 6, 4 ,2])
    expect(numberToReversedDigits(1010101010)).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])  
  })
})
