const numberToReversedDigits = (number) => {
    return (number  + '').split('').reverse().map(num => parseInt(num));
}

module.exports = numberToReversedDigits;
