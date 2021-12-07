const numberToReversedDigits = (number) =>
  number.map(
    number
      .toString()
      .split("")
      .reverse()
      .join("")
  );
{
}

module.exports = numberToReversedDigits;
