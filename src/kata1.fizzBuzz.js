const fizzBuzz = number => {
  const divisableByThree = number % 3 === 0;
  const divisablebyFive = number % 5 === 0;

  if ( divisableByThree && divisablebyFive ) {
    return "FizzBuzz";
  }
  if ( divisableByThree) {
    return "Fizz";
  }
  if (divisablebyFive ) {
    return "Buzz";
  }
  return number;
};

module.exports = fizzBuzz;
