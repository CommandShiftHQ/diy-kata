const humanCatDogYears = (number) => {
    function age () {
        if (number > 1 ) {
            let catYears = number - 2;
            catYears = catYears * 4;
            catYears = catYears + 15
            catYears = catYears + 9;

            let dogYears = number - 2;
         dogYears = dogYears * 5;
         dogYears = dogYears + 15;
         dogYears = dogYears + 9;

        return [number,catYears,dogYears]


        } else if (number === 1) { 
            let catYears = number + 15;
            let dogYears = number + 15;

            return [number,catYears,dogYears]
        } else {
            return [number,0,0]
        };
    };
    return age();
};



module.exports = humanCatDogYears;
