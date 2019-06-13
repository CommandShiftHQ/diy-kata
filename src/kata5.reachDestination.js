const reachDestination = (distance, speed) => {

    let roundToPoint5 = (number) => {
        return Math.round(number * 2 ) / 2
    }

    let time =  roundToPoint5(distance / speed).toString()

    return `I should be there in ${time} hours.`
}

module.exports = reachDestination;
