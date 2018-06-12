const joinNames = (namesObj) => {

    function string (namesObj) {

		    let newArray = namesObj.map(function(x) {
    		    return x.name;
    });

		for (let i = 0; i < newArray.length; i++) {

        if (i === newArray.length -1) {

					  newArray[i] = ` & ${newArray[i]}`;

        } else if (i === newArray.length -2) {

            newArray[i] = ` ${newArray[i]}`;

			  } else if (i > 0 && i < newArray.length -2) {

					  newArray[i] = ` ${newArray[i]}`;

        } else {

					  newArray[i] = `${newArray[i]}`;
        }
    };

    let result = newArray.join();

		return result;

    } ;

    return string(namesObj);

}

module.exports = joinNames;
