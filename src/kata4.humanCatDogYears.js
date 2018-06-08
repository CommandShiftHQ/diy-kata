const humanCatDogYears = (number) => {

  let hcdy = [];
    hcdy.push(number);

    const cat = function (number) {
        let x = ( number - 2 ) * 4;
          let res = x + 24;
            return res;
    }

    hcdy.push(cat(number));

    const dog = function (number) {
        let x = ( number - 2 ) * 5;
          let res = x + 24;
            return res;
    }

    hcdy.push(dog(number));

    return hcdy;
}

module.exports = humanCatDogYears;
