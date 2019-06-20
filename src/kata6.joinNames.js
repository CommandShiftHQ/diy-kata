const joinNames = (namesObj) => {
    const namesArr = [];
for( let i = 0; i< namesObj.length; i++){
namesArr.push(namesObj[i]);
console.log(namesArr);
};
const resNewArr =  namesObj.slice(0, -1).join(', ')+' & '+namesObj.slice(-1);
return resNewArr
};

module.exports = joinNames;
