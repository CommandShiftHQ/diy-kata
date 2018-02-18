const fizzBuzz = (number) => {
    const DividableBy3 = (number % 3) === 0
    const DividableBy5 = (number % 5) === 0

    if (DividableBy5 && DividableBy3) {
    // if (number % 5 === 0 && number % 3 === 0) {
        return 'FizzBuzz'
    }
    if (DividableBy5) {
    // if (number % 5 === 0) {
        return 'Buzz'
    }
    if (DividableBy3) {
    // if (number % 3 === 0) {
        return 'Fizz'
    }
    return number
}
export default fizzBuzz