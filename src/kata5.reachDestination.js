const reachDestination = (distance, speed) => {
 const time = distance/speed;
 const roundTo05Hrs = (time) => Math.round(time * 2) / 2;
 return `I should be there in ${roundTo05Hrs(time)} hours`
}

module.exports = reachDestination;
