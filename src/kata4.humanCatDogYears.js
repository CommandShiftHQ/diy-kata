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

