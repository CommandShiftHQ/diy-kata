const numberToReversedDigits = (number) => {
    
   const digits = number.toString().split('').map(
       function(elem) {
        return parseInt(elem);
       }
   )

   return digits.reverse();

};
module.exports = numberToReversedDigits;
