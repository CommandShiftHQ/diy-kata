const humanCatDogYears = (number) => {
    
    let firstCatYear = 15;
    let secondCatYear = 9;
    let laterCatYears = ((number - 2) * 4);
    let firstDogYear = 15;
    let secondDogYear = 9;
    let laterDogYears = ((number - 2) * 5);
   
    let humanCatYears = (firstCatYear + secondCatYear + laterCatYears);
    let humanDogYears = (firstDogYear + secondDogYear + laterDogYears);

    return [number, humanCatYears, humanDogYears];
};

module.exports = humanCatDogYears;