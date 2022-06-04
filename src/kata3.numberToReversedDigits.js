const numberToReversedDigits = number =>
  [...`${number}`]
    .map(numberAsString => parseInt(numberAsString, 10))
    .reverse();

module.exports = numberToReversedDigits;
