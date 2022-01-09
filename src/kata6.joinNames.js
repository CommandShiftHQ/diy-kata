const joinNames = (namesObj) => {
  const names = namesObj.map((element) => element.name);
  const lastName = names.pop();
  const joinedNames = names.join(", ");

  return joinedNames + " & " + lastName;
};

module.exports = joinNames;
