const numberToReversedDigits = (number) => {
  return number.toString().split("").map(function(i){
    return parseInt(i, 10)}).reverse()
  
}

export default numberToReversedDigits
