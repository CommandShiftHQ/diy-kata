const booleanToWord = (boolean) => {
  if (boolean === true) {
    return "Yes";
  }
  if (boolean === false) {
    return "No";
  }
};
module.exports = booleanToWord;
