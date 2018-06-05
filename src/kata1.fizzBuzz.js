const fizzBuzz = (number) => {
    if (number % 5 === 0 && number % 3 === 0) {
        return 'FizzBuzz'
    } 
    if (number % 5 === 0) {
            return 'Buzz'
        } if (number % 3 === 0) {
            return 'Fizz'
        } else {
            return number
        }
};

module.exports = fizzBuzz;
