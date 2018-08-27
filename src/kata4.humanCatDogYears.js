const humanCatDogYears = (number) => {
    if(number === 1) {
      return [number, 15, 15]
    } else if(number === 2) {
      return [number, 24, 24]
    } else {
      return [number, ((15 + 9) + ((number - 2) * 4)), ((15 + 9) + ((number - 2) * 5))]
    };
};

module.exports = humanCatDogYears;
