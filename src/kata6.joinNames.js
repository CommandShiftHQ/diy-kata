const joinNames = (namesObj) => {
    const extractNames = namesObj.map(item => item.name);

    let stringOfNames = '';
    if (extractNames.length === 1) {
        stringOfNames = extractNames[0];
    }

    if (extractNames.length === 2) {
        stringOfNames = extractNames.join(' & ');
    }

    if (extractNames.length > 2) {
        stringOfNames = extractNames.slice(0, -1).join(', ') + ' & ' + extractNames.slice(-1);
    }

    return stringOfNames;
}

module.exports = joinNames;