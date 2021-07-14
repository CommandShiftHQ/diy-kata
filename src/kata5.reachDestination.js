const reachDestination = (distance, speed) => {
    const time = distance / speed;
    const  MainTime = Math.round(time * 2) / 2;
    return "should reach destination in " + MainTime + " hours."
  };

module.exports = reachDestination;
