const { fizzBuzz } = require('../src');

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
      expect(fizzBuzz(9)).toEqual('Fizz')
  });

  it('returns Buzz when passed a multiple of 5', () => {
      expect(fizzBuzz(10)).toEqual('Buzz')
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
      expect(fizzBuzz(15)).toEqual('FizzBuzz')
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
      expect(fizzBuzz(4)).toEqual(4)
  });
});
