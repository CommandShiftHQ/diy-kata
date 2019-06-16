const joinNames = (object) => {
   let namesArray = object.map(element => element.name)
    let finalName = namesArray.pop().toString()
    let stringNames = namesArray.join(', ')
    return `${stringNames} & ${finalName}`
}

module.exports = joinNames;
