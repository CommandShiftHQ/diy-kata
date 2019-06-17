const  fizzBuzz = require('../src/kata1.fizzBuzz');

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {    
      expect(fizzBuzz(3)).toBe('Fizz');
      expect(fizzBuzz(9)).toBe('Fizz');      
  });

  it('returns Buzz when passed a multiple of 5', () => {    
      expect(fizzBuzz(5)).toBe('Buzz');
      expect(fizzBuzz(20)).toBe('Buzz');
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {    
      expect(fizzBuzz(15)).toBe('FizzBuzz');
      expect(fizzBuzz(75)).toBe('FizzBuzz');
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {    
      expect(fizzBuzz(7)).toBe(7);
      expect(fizzBuzz(91)).toBe(91);
  });
});
