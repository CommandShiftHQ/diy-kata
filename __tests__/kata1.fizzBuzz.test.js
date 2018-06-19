const { fizzBuzz } = require('../src');

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
    expect (fizzBuzz(9)).toBe('Fizz')
    expect (fizzBuzz(6)).toBe('Fizz')
    expect (fizzBuzz(3)).toBe('Fizz')
  });

  it('returns Buzz when passed a multiple of 5', () => {
    expect (fizzBuzz(5)).toBe('Buzz')
    expect (fizzBuzz(10)).toBe('Buzz')
    expect (fizzBuzz(25)).toBe('Buzz')
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
    expect (fizzBuzz(15)).toBe('FizzBuzz')
    expect (fizzBuzz(30)).toBe('FizzBuzz')
    expect (fizzBuzz(45)).toBe('FizzBuzz')
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
    expect (fizzBuzz(7)).toBe(7)
    expect (fizzBuzz(22)).toBe(22)
    expect (fizzBuzz(52)).toBe(52)
  });
});
