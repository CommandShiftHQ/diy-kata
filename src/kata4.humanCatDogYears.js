const humanCatDogYears = years => {
  let dogYears = 0;
  let catYears = 0;

  if (years === 1) {
    dogYears = 15;
    catYears = 15;
  }
  if (years === 2) {
    dogYears = 24;
    catYears = 24;
  }
  if (years > 2) {
    dogYears = (years - 2) * 5 + 24;
    catYears = (years - 2) * 4 + 24;
  }
  return { dogYears, catYears };
};

module.exports = humanCatDogYears;
