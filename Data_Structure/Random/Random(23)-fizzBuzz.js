((num) => {
	for(let i=1; i <=num; i++) {
		//Check for 15
		if(i%3 === 0 && i%5 === 0) {
			console.log('fizzBuzz');
			++i
		}
		//Check for 3 
		if(i%3===0) {
			console.log('fizz');
			++i
		}
		//Check for 5
		if(i%5===0) {
			console.log('Buzz');
			++i
		}
		//Check for 3 again
		if(i%3===0) {
			console.log('fizz');
			++i
		}
		if(i>num) break;
		else console.log(i);
	}
})(55)