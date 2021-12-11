const reachDestination = (distance, speed) => {
  const time = distance / speed;
  const travelTime = Math.round(time * 2) / 2;

  return `I should be there in ${travelTime} hours.`;
};
module.exports = reachDestination;
