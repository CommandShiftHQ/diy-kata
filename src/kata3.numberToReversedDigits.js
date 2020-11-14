const numberToReversedDigits = number => {
    //let num = 12345;
    
//return String(number).split("").reverse().join("");
let num = 12345,
arr = String(num).split("").reverse().map(Number);
return arr  
    
};



module.exports = numberToReversedDigits;
