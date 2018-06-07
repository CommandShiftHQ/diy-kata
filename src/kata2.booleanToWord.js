const booleanToWord = (boolean) => {
    if (boolean === true) { /*explicit check to make sure no none relevant
                              values submitted*/
        return 'yes';
    } else if (boolean === false) {
        return 'no';
    } else {
      return 'error';
    }
  };
module.exports = booleanToWord;

