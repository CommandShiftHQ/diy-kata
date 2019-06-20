const numberToReversedDigits = (number) => {
    number = 12345
    const initialArray = ('' + number).split('');
    const reversedArray = [];
    for (let i = initialArray.length - 1; i >= 0; i--) {
      reversedArray[i] = initialArray.shift();
    }
    return reversedArray;
  }
module.exports = numberToReversedDigits;
