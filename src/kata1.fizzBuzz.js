const fizzBuzz = number => {
  return number % 3 === 0 && number % 5 === 0  ? "FizzBuzz" 
        : number % 3 === 0 ? "Fizz"
        : number % 5 === 0 ? "Buzz"
        : number;
};



module.exports = fizzBuzz;


// how to decide whic solution is best:
// Who is going to use or read the code?
// Do we want to prioritize readability?
// For example by putting the checking into separate clearly named functions
// that make it easy for any reader to know what's going on?
// or de want to avoid being verbose?