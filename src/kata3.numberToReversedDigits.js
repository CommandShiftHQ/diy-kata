const numberToReversedDigits = (number) => {

 return (number + '').split('').reverse().map(n => parseInt(n));
 
}
module.exports = numberToReversedDigits;
