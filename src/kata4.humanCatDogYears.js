const humanCatDogYears = (number) => {
    let dogYears = 0;
    let catYears = 0;

    for (let i = 1; i <= number; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 7;
        } else if (i === 2) {
            catYears += 9;
            dogYears += 9;
        } else {
            catYears += 4;
            dogYears += 5;
        }
    }

    return number;
}

module.exports = humanCatDogYears;
