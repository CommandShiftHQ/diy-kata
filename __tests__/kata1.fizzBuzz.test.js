import { fizzBuzz } from '../src'

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  })

  it('returns Buzz when passed a multiple of 5', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  })

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  })

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
    expect(fizzBuzz(2)).toEqual(2);
  })
})
