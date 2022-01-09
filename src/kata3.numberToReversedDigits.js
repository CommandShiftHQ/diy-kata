const numberToReversedDigits = (number) =>
  parseFloat(
    number
      .toString()
      .split("")
      .reverse()
      .join("")
  );

module.exports = numberToReversedDigits;
