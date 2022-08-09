const numberToReversedDigits = number => {
    arr = String(number).split("").reverse().map(Number);
    return arr;
};

module.exports = numberToReversedDigits;
