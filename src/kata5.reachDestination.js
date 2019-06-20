const reachDestination = (distance, speed) => {
    let estimatedArrivalTime = Math.round((distance / speed)*2)/2;
    
    return (`I will arrive in ${estimatedArrivalTime} hours`);
}

module.exports = reachDestination;
