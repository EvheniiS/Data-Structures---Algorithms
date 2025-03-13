// Efficient method to Find the character that
// Appears the most and the number of times it appears

//32eddseew3&*he33lls#o


const maxChar = (str) => {
	let obj = {};

	for(let char of str) {
		(!obj[char])? obj[char] = 1 : obj[char]++
	}
	console.log(obj)

	let maxNum = 0;
	let maxChar = '';

	for(let key in obj) {
		if(obj[key] >= maxNum) {
			maxNum = obj[key]
			maxChar = key
		}
	}
	return console.log(`Then biggest number of occurences(${maxNum}) has " ${maxChar} " charecter`)

}

maxChar("32eddseew3&**he33lls#o")