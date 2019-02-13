const numberToReversedDigits = (number) => {
    const digits = number.toString().split('').map(Number);
    const reversedDigits = digits.sort((a, b) => b - a);
    return reversedDigits;
}

module.exports = numberToReversedDigits;
