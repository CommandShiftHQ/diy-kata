const booleanToWord = boolean => {
    if (boolean == true){
        return 'Yes';
    }
    else if (boolean == false){
        return 'No';
    }
};

module.exports = booleanToWord;
