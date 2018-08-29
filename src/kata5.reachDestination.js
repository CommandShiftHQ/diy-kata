const reachDestination = (distance, speed) => {
    const journeyTime = (distance / speed);
    const roundedTime = Math.ceil(journeyTime * 2) / 2;
    return `I should be there in about ${roundedTime} hour`
};

module.exports = reachDestination;
