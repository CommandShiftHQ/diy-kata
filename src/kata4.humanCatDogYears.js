const humanCatDogYears = (number) => {
    let arr = []
    if(number === 1) {
      arr.push(number, 15, 15)
       return arr
    }
     
    if(number === 2) {
      arr.push(number, 24, 24)
        return arr
    }
    if(number > 2) {
      arr.push(number, 24 + (4 * (number - 2)),24 + (5 * (number - 2)))
        return arr
    }
}

export default humanCatDogYears
