const numberToReversedDigits = (number) => {
  return number.toString().split("").reverse().map(digit => parseInt(digit));
}

module.exports = numberToReversedDigits;
