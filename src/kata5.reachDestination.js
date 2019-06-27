const reachDestination = (d, s) => {
    return `I should be there in ${Math.round((d/s) * 2) / 2} hours.`;
}

module.exports = reachDestination;
