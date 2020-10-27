const numberToReversedDigits = number => {
  const stringified = String(number);
  const arrayed = stringified.split("");
  const numberfied = arrayed.map(char => Number(char));
  return numberfied.reverse();
};


// less verbose, more chained

const numberToReversedDigitsChain = number => {
  return String(number).split("").map(char => Number(char)).reverse();
};

module.exports = numberToReversedDigits;
