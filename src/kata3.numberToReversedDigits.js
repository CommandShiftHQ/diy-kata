const numberToReversedDigits = (number) => {
let numberString = number.toString();
let stringArray = numberString.split("");
let arrayReverse = stringArray.reverse();
return arrayReverse;
}

export default numberToReversedDigits
