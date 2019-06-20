const reachDestination = (distance, speed) => {
const timeLeft = (distance/speed).toFixed(1)
const roundTime = (Math.round(timeLeft*2))/2
return roundTime
};



module.exports = reachDestination;
