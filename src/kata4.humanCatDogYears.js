const humanCatDogYears = (number) => {
  const array = [number]
	if (number === 0){
    array[1] = 0
    array[2] = 0
  } else if (number === 1) {
    	array[1] = 15
    	array[2] = 15
  } else {
    	array[1] = (((number -2)*4)+24)
    	array[2] = (((number -2)*5)+24)
  }
	return array    
}

export default humanCatDogYears
