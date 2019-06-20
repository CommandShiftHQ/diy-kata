const joinNames = (namesObj) => {

    let names = [];

    for (let i = 0; i < namesObj.length; i++) {
    names.push(namesObj[i])
    };


    let results = namesObj.slice(0, -1).join(', ')+' & '+namesObj.slice(-1);
    return results;
}

module.exports = joinNames;
