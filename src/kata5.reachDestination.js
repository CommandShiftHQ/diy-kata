const reachDestination = (distance, speed) => {

  function reachDestination (distance, speed) {

    const time = Math.floor(distance) / Math.floor(speed);

    const twoDec = time.toFixed(2);

    const twoDecArr = twoDec.toString().split('.');

    if (twoDecArr[1] >= 0 && twoDecArr[1] <= 49) {
      twoDecArr[1] = 5;
    } else {
      twoDecArr[0]++;
      twoDecArr[1] = 0;
    }

    const result = twoDecArr.join('.');

    return `I should be there in ${result} hours`;

  }

  return reachDestination(distance, speed);
};

module.exports = reachDestination;
