const reachDestination = (distance, speed) => {
  const hours = distance / speed;
  const hoursToTheNearestHalf = Math.round(hours * 2) / 2;
  return `I should be there in ${hoursToTheNearestHalf} hours`;
};

module.exports = reachDestination;
