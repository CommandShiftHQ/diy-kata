const numberToReversedDigits = (number) => {

const tostring = number.toString();
const split = tostring.split('');
let map = split.map(function(result) {
  return parseInt(result);
})
let rev = map.reverse();
return rev;
}

module.exports = numberToReversedDigits;
