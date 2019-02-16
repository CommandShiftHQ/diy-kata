//For loop version - after Ersel
const humanCatDogYears = (number) => {

    const humanYears = number;
    const catYears = [15, 9, 4];
    const dogYears = [15, 9, 5];

    const calculateYearsEquivalent = (animalYears, humanYears) => {
        let animalYearsEquivalent = 0;
        const humanYearsInterger = Math.floor(humanYears);

            for(let i = 0; i < humanYearsInterger; i++) {
                let indexToUse = i > 2 ? 2 : i;
                animalYearsEquivalent += animalYears[indexToUse];
            }

            if (humanYears % 1 !== 0) {
                let indexToUse = humanYearsInterger > 2 ? 2 : humanYearsInterger;
                animalYearsEquivalent += animalYears[indexToUse] * (humanYears % 1);
            }
                
        return animalYearsEquivalent;
    };

    return [humanYears, calculateYearsEquivalent(catYears, humanYears), calculateYearsEquivalent(dogYears, humanYears)];

};

//Original version
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
    }

    if (number <= 2) {
        yearsComparison.push(number, 
            (((number - 1) * catYearTwo) + catYearOne), 
            (((number - 1) * dogYearTwo) + dogYearOne));
    }

    if (number > 2) {
        yearsComparison.push(number, 
            (((number - 2) * catYearThreeOnwards) + catYearOne + catYearTwo), 
            (((number -2) * dogYearThreeOnwards) + dogYearOne + dogYearTwo));
    }

    return yearsComparison;
}

module.exports = humanCatDogYears;
