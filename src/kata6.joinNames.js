const joinNames = (namesObj) => {
    const nameArray = namesObj.map(function(x) {
       return x.name
    });

    for (let i = 0; i < nameArray.length; i++) {

       if (i === nameArray.length - 1) {

          nameArray[i] =  `& ${nameArray[i]}`;

      } else if (i < nameArray.length - 2) {

      nameArray[i] =  `${nameArray[i]},`;

      } else {

          nameArray[i] = `${nameArray[i]}`;
 }
};


const result = nameArray.join(' ');


return result;

};

module.exports = joinNames;
