const numberToReversedDigits = (number) => {
    // convert number to string and split in to an array of substrings
    let initialArray = String(number).split('');
    let reversedArray = [];
    //loop through array starting at last item
    for (let i = initialArray.length - 1; i >= 0; i--) {
        // shift() removes the first element from an array and returns it. convert string back to number
        reversedArray[i] = parseInt(initialArray.shift(),10);
    }
    //console.log(reversedArray);
    return reversedArray;
}

export default numberToReversedDigits
