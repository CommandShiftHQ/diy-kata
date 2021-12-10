const numberToReversedDigits = (number) =>
  number
    .toString()
    .split("")
    .reverse()
    .join("");

module.exports = numberToReversedDigits;
