const humanCatDogYears = (number) => {
    
    let array = [number]
    // new array with human year as first element - array [0]
    // cat year as second element - array [1]
    // dog year as third element - array [2]

    if (number === 0) {
        array[1] = 0
        array[2] = 0
    }
    // if human year is 0 years old.

    else if (number === 1) {
        array[1] = 15
        array[2] = 15
    }
    // if human year is 1 years old.

    else if (number === 2) {
        array[1] = 24
        array[2] = 24
    }
    // if human year is 2 years old.

    else {
        array[1] = (24) + (number - 2) * 4
        array[2] = (24) + (number - 2) * 5
    }
    // if human year is 3 years old or over.

    return array
    // returns array of human, cat, and dog years when passed human years.    
}

export default humanCatDogYears
/* Human Years, Cat Years, Dog Years

When humanCatDogYears is passed a number (representing human years), it should return an array of three numbers.
First number should be the human years passed as an argument.
Second element should be the equivalent cat years.
Third element should be the equivalent dog years.

Formulas for calculating cat and dog years

Cat Years
15 cat years for first human year +9 cat years for second human year +4 cat years for each human year after that

Dog Years
15 dog years for first year +9 dog years for second year +5 dog years for each year after that. */