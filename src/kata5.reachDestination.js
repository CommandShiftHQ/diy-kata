const reachDestination = (distance, speed) => {
    const timeRoundedUp = Math.ceil(distance / speed *2)/2;
    return `I should be there in ${timeRoundedUp} hours.`;
}

module.exports = reachDestination;
