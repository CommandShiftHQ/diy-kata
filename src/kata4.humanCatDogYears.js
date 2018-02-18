const humanCatDogYears = (number) => {
//makes human age first element in array
    let array = [number]
//condition for if person is 0 years old
if (number === 0){
    array[1] = 0
    array[2] = 0
    }
//condition for if person is 1 year old
else if (number === 1) {
    array[1] = 15
    array[2] = 15
    }
//condition for all over 2 years
else {
    array[1] = (((number -2)*4)+24)
    array[2] = (((number -2)*5)+24)
    }
return array    
}

export default humanCatDogYears
