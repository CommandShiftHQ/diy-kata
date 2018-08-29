const numberToReversedDigits = (number) => {
    const reversed = number.toString().split("").map(function(x) {
       return parseInt(x)
});
    return reversed.reverse();
}; 

module.exports = numberToReversedDigits;
