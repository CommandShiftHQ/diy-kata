const humanCatDogYears = (number) => {
    let humanYears = number;
    let catYears = number * 6;
    let dogYears = number * 7;
    let years = {
        human: humanYears,
        cat: catYears,
        dog: dogYears
    };
    return years;
};

export default humanCatDogYears
