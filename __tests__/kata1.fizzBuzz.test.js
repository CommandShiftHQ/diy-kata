const { fizzBuzz } = require('../src');

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it('returns Buzz when passed a multiple of 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
    expect(fizzBuzz(8)).toEqual('fizzBuzz');
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
    expect(fizzBuzz(fizzBuzz.number)).toEqual(fizzBuzz.number);
  });
});
