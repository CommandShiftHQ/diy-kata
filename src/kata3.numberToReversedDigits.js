const numberToReversedDigits = (number) => {
    number = String(number).split("").reverse().map(Number);
    return number;
}

module.exports = numberToReversedDigits;
