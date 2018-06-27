const numberToReversedDigits = (number) => {

   const digits = number.toString().split('').map(elem => parseInt(elem));

   return digits.reverse();

};

module.exports = numberToReversedDigits;
