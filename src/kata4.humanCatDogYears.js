const humanCatDogYears = (number) => {

    let ages = [];
    ages.push(number);

    const cat = function (number) {
        let catAge = ( number - 2 ) * 4;
        let total = catAge + 20;
        return total;
    }

    ages.push(cat(number));

    const dog = function (number) {
        let dogAge = ( number - 2 ) * 5;
        let total = dogAge + 20;
        return total;
    }

    ages.push(dog(number));

    return ages;
}

module.exports = humanCatDogYears;
