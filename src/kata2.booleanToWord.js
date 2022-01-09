const booleanToWord = (boolean) => {
  if (boolean === true) {
    return "Boolean passed in true";
  }
  if (boolean === false) {
    return "Boolean passed in false";
  }
};
module.exports = booleanToWord;
