
const reachDestination = (distance, speed) => {
// console.log('I should be there in ' + 4.5 + ' hours.')
let time = (distance/speed).toFixed(1);
const timeWholeHours = Math.trunc(time);
const decimal = time - timeWholeHours;
if(decimal <= 0.5){time = timeWholeHours + 0.5}
else {time = timeWholeHours + 1};
console.log('I should be there in ' + time + ' hours.')
};
reachDestination(44, 10);
module.exports = reachDestination;
