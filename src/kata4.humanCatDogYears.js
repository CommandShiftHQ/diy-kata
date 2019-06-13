const humanCatDogYears = (number) => {
    const yearsArray = []

    let catYears = (number) =>{ 
        return 24 + ((number - 2) * 4)
    };

    let dogYears = (number) => {
        return 24 + ((number - 2) * 5 )
    };

    yearsArray.push(number, catYears(number), dogYears(number))
    return yearsArray
};

module.exports = humanCatDogYears;
