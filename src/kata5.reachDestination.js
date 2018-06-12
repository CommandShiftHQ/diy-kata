const reachDestination = (distance, speed) => {

  function reachDestination (distance, speed) {

    let time = Math.floor(distance) / Math.floor(speed);

    let twoDec = time.toFixed(2);

    let twoDecArr = twoDec.toString().split(".");

        if (twoDecArr[1] >= 0 && twoDecArr[1] <= 49) {
            twoDecArr[1] = 5;
        } else {
            twoDecArr[0]++;
            twoDecArr[1] = 0;
      };

    let result = twoDecArr.join('.');

    return `I should be there in ${result} hours`;

    };

    return reachDestination(distance, speed);
}

module.exports = reachDestination;
