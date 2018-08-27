const reachDestination = (distance, speed) => {
  return 'I should be there in ' + ((Math.round((distance / speed) * 2)) / 2) +  ' hours'
};

module.exports = reachDestination;
