const joinNames = namesObj => {
    function list(people){
        const names = people.map(({ name }) => name);
        const finalName = names.pop();
        return names.length
        ? names.join(', ') + ' & ' + finalName
        : finalName;
    }

    return list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])

};

module.exports = joinNames;
