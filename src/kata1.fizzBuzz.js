const fizzBuzz = (number) => {
  const isDivisableBy3 = number % 3 === 0;
  const isDivisableBy5 = number % 5 === 0;

  if (isDivisableBy3 && isDivisableBy5) {
    return "FizzBuzz";
  }

  if (isDivisableBy3) {
    return "Fizz";
  }

  if (isDivisableBy5) {
    return "Buzz";
  }

  return number;
};

module.exports = fizzBuzz;
