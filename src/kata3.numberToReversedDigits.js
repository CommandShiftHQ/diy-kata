const numberToReversedDigits = (number) => {

let num = number;
let output = [];

while (num) {
    output.push(num % 10);
    num = Math.floor(num/10);
}
return output;
}

module.exports = numberToReversedDigits;
