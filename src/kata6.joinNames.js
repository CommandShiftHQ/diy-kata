const joinNames = namesObj => {
    const names = namesObj.map(person => person.name).join(", ");
    const comma = names.lastIndexOf(",");
    return `${names.substr(0, comma)} &${names.substr(comma + 1)}`;
  };

module.exports = joinNames;
