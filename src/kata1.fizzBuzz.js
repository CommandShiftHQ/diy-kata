function isMultipleOf3(number) {
  return number % 3 === 0;
}

function isMultipleOf5(number) {
  return number % 5 === 0;
}

const fizzBuzz = number => {
  let result = "";
  if (isMultipleOf3(number)) {
    result += "Fizz";
  }
  if (isMultipleOf5(number)) {
    result += "Buzz";
  }
  if (!(isMultipleOf3(number) || isMultipleOf5(number))) {
    return number;
  }
  return result;
};

module.exports = fizzBuzz;
