const humanCatDogYears = (number) => {
    const catYearOne = 15;
    const dogYearOne = catYearOne;
    const catYearTwo = 9;
    const dogYearTwo = catYearTwo;
    const catYearThreeOnwards = 4;
    const dogYearThreeOnwards = 5;
    const yearsComparison = [];

    if (number < 1) {
        yearsComparison.push(number, 
            (number * catYearOne), 
            (number * dogYearOne));
        return yearsComparison;
    }

    if (number <= 2) {
        yearsComparison.push(number, 
            (((number - 1) * catYearTwo) + catYearOne), 
            (((number - 1) * dogYearTwo) + dogYearOne));
        return yearsComparison;
    }

    if (number > 2) {
        yearsComparison.push(number, 
            (((number - 2) * catYearThreeOnwards) + catYearOne + catYearTwo), 
            (((number -2) * dogYearThreeOnwards) + dogYearOne + dogYearTwo));
        return yearsComparison;
    }
}

module.exports = humanCatDogYears;
