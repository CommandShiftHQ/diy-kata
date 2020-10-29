const calculateAnimalYears = (animal, number) => {
  let factor = animal === "dog" ? 5 : animal === "cat" ? 4 : console.error("animal not recognised");
   
  if (number === 1) {
     animalYears = 15;
    } else if (number === 2) {
      animalYears = 24;
   } else {
     animalYears = ((number - 2) * factor) + 24;
   }
  return animalYears;
}


const humanCatDogYears = number => {
  let catYears = calculateAnimalYears("cat", number)
  let dogYears = calculateAnimalYears("dog", number)

  return [number, catYears, dogYears]
};

module.exports = humanCatDogYears;




// 10 - 2 = 8
// 8 * 4 + 24

// Formulas for calculating cat and dog years
// Cat Years
// 15 cat years for first human year

// +9 cat years for second human year

// +4 cat years for each human year after that

// Dog Years
// 15 dog years for first year

// +9 dog years for second year

// +5 dog years for each year after that