//Solution and shorter solution 
const humanCatDogYears = (number) => {
    const humanYears = number;
    let catYears = 0;
    let dogYears = 0;
  
    for (let i = 0; i <= humanYears; i++) {
      if (i === 1) {
        dogYears = 15;
        catYears = 15;
      }
      if (i === 2) {
        dogYears += 9;
        catYears += 9;
      }
      if (i > 2) {
        dogYears += 5;
        catYears += 4;
      }
    }
  
    return [humanYears, catYears, dogYears];
  };
  console.log(humanCatDogYears(10));
  
  
  //Overkill and longer solution 
  
  
  const overKill = number => {
    let catAge;
      let humanYears = number;
      let DogYears;
  
    yearsArray = [humanYears];
  
    let sequence = Array.from({ length: number }, (v, i) => i);
  
    let maxValue = sequence.reduce(function(acc, curr) {
      return Math.max(acc, curr);
    });
  
    if (sequence.length < 2) {
        catAge = 15;
        DogYears =15;
        yearsArray.push(catAge);
        yearsArray.push(DogYears);
    } if ( sequence.length ===2) {
        catAge = 24;
        DogYears =24;
        yearsArray.push(catAge);
        yearsArray.push(DogYears);
    } if (sequence.length >2){
  
      catAge = 24 +((maxValue-1)*4)
      DogYears = 24 + (maxValue - 1) * 5;
      yearsArray.push(catAge);
      yearsArray.push(DogYears);
    }
  
    
     return yearsArray;
  };
  console.log(overKill(3));
  
  module.exports = humanCatDogYears;
  