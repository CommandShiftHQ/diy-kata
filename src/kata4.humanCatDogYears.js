const humanCatDogYears = (number) => {
    let catYears = number - 2;
     catYears = catYears * 4;
     catYears = catYears + 15
     catYears = catYears + 9;

     let dogYears = number - 2;
     dogYears = dogYears * 5;
     dogYears = dogYears + 15;
     dogYears = dogYears + 9;

     return [number,catYears,dogYears]
};

module.exports = humanCatDogYears;
