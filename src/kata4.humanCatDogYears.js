const humanCatDogYears = (number) => {
  if (number === 0) {
    return [0, 0, 0]
  }
  const cat = 15 + 9 + ((number - 2) * 4);
  const dog = 15 + 9 + ((number - 2) * 5);
  return [number, cat, dog]
}

module.exports = humanCatDogYears;
