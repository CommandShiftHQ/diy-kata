const humanCatDogYears = (number) => { 
  let newArray = [number]
  if (number === 1) {
  return [1, 15, 15]
  } if (number === 2) {
  return [2, 24, 24]
  } newArray.push(24 + ((number - 2) * 4))
  newArray.push(24 + ((number - 2) * 5))
  return newArray
}

module.exports = humanCatDogYears;
