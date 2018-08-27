const fizzBuzz = (number) => {
 if (number == 3){
    return 'Fizz';
 } else if (number === 5) {
    return 'Buzz';
 } else if (number === 3 + 5){
     return 'fizzBuzz';
 } else {
    return number;
 }
}

module.exports = fizzBuzz;