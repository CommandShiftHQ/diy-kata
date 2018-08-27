const joinNames = (namesObj) => {
   return namesObj.join(', ').replace(/,(?!.*,)/gmi, ' &');
}

module.exports = joinNames;
