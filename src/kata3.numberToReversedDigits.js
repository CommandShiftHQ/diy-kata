const numberToReversedDigits = (number) =>
    number.toString().split('').map(Number).reverse();

module.exports = numberToReversedDigits;
