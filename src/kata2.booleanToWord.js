const booleanToWord = (boolean) => {

    if(boolean===true){ 
    return 'true';
    }
    if (boolean===false){
    return 'false';
    }
    return 'not a boolean'
};


export default booleanToWord
