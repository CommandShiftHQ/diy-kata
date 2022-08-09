const reachDestination = (distance, speed) => {
    let arTime = distance / speed;
    let time = Math.trunc(arTime);
    let deciTime = arTime - time;
    let arTimeFinal;

    if (deciTime > 0.5 && deciTime < 0.75) {
        arTimeFinal = time + 0.5;
    }
    else if (deciTime > 0.5 && deciTime >= 0.75){
        arTimeFinal = time + 1;
    }
    else if (deciTime < 0.5 && deciTime < 0.25){
        arTimeFinal = time;
    }
    else if (deciTime < 0.5 && deciTime >= 0.25){
        arTimeFinal = time + 0.5;
    }
    else if (deciTime == 0.5 || deciTime == 0) {
        arTimeFinal = arTime;
    }
    return "I should be there in " + arTimeFinal + " hours.";
};

module.exports = reachDestination;
