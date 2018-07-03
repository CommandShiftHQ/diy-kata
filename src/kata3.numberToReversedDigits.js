const numberToReversedDigits = (number) => {

  const tostring = number.toString();
  const split = tostring.split('');
  const map = split.map(function (result) {
    return parseInt(result);
  });
  const rev = map.reverse();
  return rev;
};

module.exports = numberToReversedDigits;
