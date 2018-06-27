const booleanToWord = (boolean) => {
    if (boolean === true) { /*explicit check to make sure no none relevant
                              values submitted*/
        return 'yes';
    }
    if (boolean === false) {
        return 'no';
    }

      return 'error';

  };
module.exports = booleanToWord;

