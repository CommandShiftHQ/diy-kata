const joinNames = (namesObj) => {
    
    const nameArray = namesObj.map(element => element.name);
	const commaSeperatedNameString = nameArray.join(', ');
	const lastCommaIndex = commaSeperatedNameString.lastIndexOf(',');
    return commaSeperatedNameString.substr(0, lastCommaIndex) + ' &' + commaSeperatedNameString.substr(lastCommaIndex + 1);

};

module.exports = joinNames;
