const humanCatDogYears = (number) => {
    const humToDogYrs = (15 + 9 + 5*(number -2 ));
    const humToCatYrs = (15 + 9 + 4*(number -2 ));
    return [number, humToCatYrs, humToDogYrs];
};

module.exports = humanCatDogYears;
