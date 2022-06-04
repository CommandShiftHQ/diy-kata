const joinNames = namesObj => {
    let string = '';
    for (let i = 0; i<namesObj.length - 1; i++)
    {
        if(i < (namesObj.length - 2))
        {string = string + namesObj[i].name + ', '}
        else if (i < (namesObj.length - 1))
        {string = string + namesObj[i].name + ' & ' + namesObj[i + 1].name}
    }   
    console.log(string);
}
let listOfNames = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Marge'}, {name: 'Homer'}];
joinNames(listOfNames);

module.exports = joinNames;
