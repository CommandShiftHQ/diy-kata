const reachDestination = (distance, speed) => {
  if (distance < speed) {
    const time = (distance / speed) * 60
    return `Your estimated time of arrival will be ${time} minutes`
  }
  if (distance === speed) {
    return `Your estimated time of arrival will be 1 hour`
  }
    const time = (distance / speed)
    return `Your estimated time of arrival will be ${time} hours`
  }
module.exports = reachDestination;
