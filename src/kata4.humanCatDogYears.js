const humanCatDogYears = (number) => {
let tmp = number; 
let catAge = 0;
let dogAge = 0;

if (tmp === 0) {
    return [0, 0, 0];
}

if (tmp > 0) {
catAge += 15;
dogAge += 15;
}

if (tmp > 1) {
catAge += 9;
dogAge += 9;
}

if (tmp > 2) {
catAge += (4 * (tmp-2));
dogAge += (5 * (tmp-2));
}

return [number, catAge, dogAge]
}

module.exports = humanCatDogYears;
