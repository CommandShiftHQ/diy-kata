const humanCatDogYears = (number) => {

  const array = [];


    if (number === 1) {
      array.push(number);
      array.push(15);
      array.push(15);
      return array;

    } else if (number === 2) {
      array.push(number);
      array.push(24);
      array.push(25);
      return array;

    } else {
      array.push(number);
      array.push(24 +((number - 2) * 4));
      array.push(24 + ((number - 2) * 5));
      return array;

    }

}

module.exports = humanCatDogYears;
