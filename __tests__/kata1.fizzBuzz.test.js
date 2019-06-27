import { fizzBuzz } from '../src/kata1.fizzBuzz';

describe('fizzBuzz', () => {
  xit('returns Fizz when passed a multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });

  it('returns Buzz when passed a multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
   expect(fizzBuzz(15)).toBe('FizzBuzz')
   expect(fizzBuzz(30)).toBe('FizzBuzz')
   expect(fizzBuzz(90)).toBe('FizzBuzz')
  });

  xit('returns the number when it isn\'t a multiple of 3 or 5', () => {

  });
});
