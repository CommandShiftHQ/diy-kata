const reachDestination = (distance, speed) => {
    const journeyTime = Math.ceil(distance / speed)
    return `I should be there in about ${journeyTime} hour`
};

module.exports = reachDestination;
