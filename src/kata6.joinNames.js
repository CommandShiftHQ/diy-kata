const joinNames = (namesObj) => {

 const newArray = namesObj.map(iterator => iterator.name);

 const lastElementIndex = newArray.length - 1;

 newArray.splice(lastElementIndex, 1, `& ${newArray[lastElementIndex]}`)

    return newArray.join(', ').replace(', &', ' &');

}

module.exports = joinNames;
