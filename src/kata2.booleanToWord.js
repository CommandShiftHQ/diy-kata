const booleanToWord = (boolean) => {
    if(boolean === true) { /*explicit check to make sure no none relevant
                              values submitted*/
        return 'yes'
    } else {
        return 'no'
    }
}

module.exports = booleanToWord;
