const humanCatDogYears = (number) => {
    
    const CatYears = (24) + (number - 2) * 4
    const DogYears = (24) + (number - 2) * 5

    return number + ', ' + (CatYears) + ', ' + (DogYears)
    // returns array of human, cat and dog years when passed human years    
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