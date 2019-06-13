const humanCatDogYears = (number) => {
    const yearsArray = []

    const catYears = (number) =>{ 
        return 24 + ((number - 2) * 4)
    };

    const dogYears = (number) => {
        return 24 + ((number - 2) * 5 )
    };

    yearsArray.push(number, catYears(number), dogYears(number))
    return yearsArray
};

module.exports = humanCatDogYears;
