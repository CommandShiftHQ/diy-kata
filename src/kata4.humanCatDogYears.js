const humanCatDogYears = (number) => {
    
    // calculate cat years
    let catYears = (number) => {
        let numCatYears = 0;
        if (number === 1){
            return numCatYears += 15;
        }
        else if (number === 2){
            return numCatYears += 15 + 9;
        }
        else if (number >= 3){
            return numCatYears += (15 + 9) + ((number - 2) * 4);
        }
    };

    // calculate dog years
    let dogYears = (number) => {
        let numDogYears = 0;
        if (number === 1){
            return numDogYears += 15;
        }
        else if (number === 2){
            return numDogYears += 15 + 9;
        }
        else if (number >= 3){
            return numDogYears += (15 + 9) + ((number - 2) * 5);
        }
    };

    //define array & add human age
    let humanCatDogArray = [number];
    
    // add calculated cat & dog years to end of array
    humanCatDogArray.push(catYears(number),dogYears(number));
    
    return humanCatDogArray;
}

export default humanCatDogYears
