const joinNames = (namesObj) => {

 const newArray = namesObj.map(iterator => iterator.name);

    newArray.splice(newArray.length-1, 1, '& '+newArray[newArray.length-1])

    return newArray.join(', ').replace(', &', ' &');

}

module.exports = joinNames;
