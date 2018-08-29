const joinNames = (namesObj) => {
   return namesObj.join(', ').replace(/,(?!.*,)/i, ' &');
}

module.exports = joinNames;
