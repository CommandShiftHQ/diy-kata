import { fizzBuzz } from '../src'

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz')
      // expect the result of fizzBuzz (with 3 passed as an argument) to be a string of 'Fizz'
  })

  it('returns Buzz when passed a multiple of 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz')
      // expect the result of fizzBuzz (with 5 passed as an argument) to be a string of 'Buzz'
  })

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz')
      expect(fizzBuzz(30)).toBe('FizzBuzz')
      expect(fizzBuzz(90)).toBe('FizzBuzz')
      // expect the result of fizzBuzz (with 15, 30, 90 passed as an argument) to be a string of 'FizzBuzz'
  })

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
      expect(fizzBuzz(4)).toBe(4)
      expect(fizzBuzz(11)).toBe(11)

  })
})