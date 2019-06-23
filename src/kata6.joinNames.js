const joinNames = (namesObj) => {
    const names = namesObj.map((x) => x.name).join(', ')
    return names.substring(0, names.lastIndexOf(',')) + ' &' + names.substring(names.lastIndexOf(',') +1)
}

module.exports = joinNames;
