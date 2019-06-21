const joinNames = (namesObj) => {
    let names = namesObj.map(a => a.name);
    if (names.length === 1) return namesObj[0].name;
    let lastName = names.pop();
    return names.join(', ') + ' & ' + lastName;
}

module.exports = joinNames