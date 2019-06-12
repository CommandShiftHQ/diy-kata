const numberToReversedDigits = (number) => {
   const numberArray = Array.from(number.toString()).map(Number)
   const reversedArray = numberArray.reverse()
   return reversedArray
}

module.exports = numberToReversedDigits;
