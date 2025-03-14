



const reverseInt = (n) => {
	str = n.toString()
	if(str.length === 1) {
		return console.log(`its only one chareter ${n}`)
	}

	if(n < 0 ) return -1*parseInt(str.split('').reverse().join(''));
	
	return parseInt(str.split('').reverse().join(''));
}

reverseInt(500)