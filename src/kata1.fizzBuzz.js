const fizzBuzz = (number) => {
    const isDivisibleBy3 = number % 3 === 0;
    const isDivisibleBy5 = number % 5 === 0;
    const isDivisibleBy3And5 = number % 5 === 0  && number % 3 === 0;

 if(isDivisibleBy3And5)
    {
        return 'FizzBuzz'
    }
else if(isDivisibleBy3)
    {
        return 'Fizz'
    }
else if(isDivisibleBy5)
    {
        return 'Buzz'
    }
else
    {
        return number
    }
};

module.exports = fizzBuzz;
