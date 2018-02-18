const booleanToWord = (boolean) => {

    if (boolean === true) {
        return 'Yes'
    }
    if (boolean === false) {
        return 'No'
    }
}
// When booleanToWord is passed true, it should return 'Yes'. When it is passed false, it should return 'No'.
export default booleanToWord