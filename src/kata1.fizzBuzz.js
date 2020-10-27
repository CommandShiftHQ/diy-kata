const fizzBuzz = number => {
  return number % 3 === 0 && number % 5 === 0  ? "FizzBuzz" 
        : number % 3 === 0 ? "Fizz"
        : number % 5 === 0 ? "Buzz"
        : number;
};


// check if number is a multiple of 3, 5 or both

// returns Fizz when passed a multiple of 3

// returns Buzz when passed a multiple of 5

// returns FizzBuzz when passed a multiple 3 and 5

// returns the number when it isn't a multiple of 3 or 5

module.exports = fizzBuzz;


// how to decide whic solution is best:
// Who is going to use or read the code?
// Do we want to prioritize readability?
// For example by putting the checking into separate clearly named functions
// that make it easy for any reader to know what's going on?
// or de want to avoid being verbose?