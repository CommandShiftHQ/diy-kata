const humanCatDogYears = number => {
    const human2CatYrs = 15 + 9 + 4*(number -2);
    const human2DogYrs = 15 + 9 + 5* (number - 2);
    return [number, human2CatYrs,human2DogYrs]
   };   

module.exports = humanCatDogYears;
