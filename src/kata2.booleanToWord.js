const booleanToWord = (boolean) => {
    if(boolean === Boolean(true))
    {
        return true;
    }
    else if(boolean === Boolean(false))
    {
        return false;
    }
};

module.exports = booleanToWord;
