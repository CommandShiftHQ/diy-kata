import {numberToReversedDigits} from '../src'

describe('numberToReversedDigits', () => {
    it('test test', () => {
    expect(numberToReversedDigits(54321)). toBe(12345)
    // When numberToReversedDigits is a passed a number (54321), it returns a reversed array of that number's digit (12345).
    })
    it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)). toBe(54321)
    // When numberToReversedDigits is a passed a number (12345), it returns a reversed array of that number's digit (54321).
  })
})