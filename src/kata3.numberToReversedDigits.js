const numberToReversedDigits = (number) => {

    return + (number.toString().split("").reverse().join(""))
    // returns a reversed array of the number's digits
}

export default numberToReversedDigits