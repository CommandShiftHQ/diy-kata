const reachDestination = (distance, speed) => {

  const result = Math.round((distance / speed) * 2)/ 2

  return result.toString();

}

module.exports = reachDestination;
