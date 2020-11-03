const reachDestination = (distance, speed) => {
   const time = (Math.ceil((distance / speed) * 2) / 2);  
   return `I should be there in ${time} hours.`
};

module.exports = reachDestination;






