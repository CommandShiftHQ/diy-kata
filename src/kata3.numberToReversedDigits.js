const numberToReversedDigits = (number) => {
	let array =  (""+number).split("")
	let array2 = array.map(Number)
	array2.reverse()
	return array2
}

export default numberToReversedDigits
