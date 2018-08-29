const joinNames = (namesObj) => {
 let names = '';
 for (let i = 0; i < namesObj.length - 1; i++) {
  names += namesObj[i].name + ', '
 }
  names += namesObj[namesObj.length - 1].name;

  return names.replace(/,(?=[^,]*$)/,' &')
}

module.exports = joinNames;
