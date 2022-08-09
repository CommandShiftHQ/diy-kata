const humanCatDogYears = number => {
    let catYears = 15 + 9 + 4 * (number - 2);
    let dogYears = 15 + 9 + 5 * (number - 2);
    
    let yearsArr = [number];
    yearsArr.push(catYears, dogYears);
    return yearsArr;
};

module.exports = humanCatDogYears;
