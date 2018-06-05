const booleanToWord = (boolean) => {
    if (boolean === false || boolean === 0 || boolean === "" || boolean === null || boolean === undefined || boolean === NaN) {
        return 'No'
    } else {
        return 'Yes'
    }
}

module.exports = booleanToWord;
