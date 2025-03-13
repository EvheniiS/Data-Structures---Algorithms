function sayHello() {
    console.log("Hello!");
}
function debounce(fn , delay) {
	let timer;
	
	return function () {
		clearTimeout(timer);
		timer = setTimeout(()=> {
			fn()
		}, delay); 
	};
}
const debouncedHello = debounce(sayHello, 1000);

debouncedHello();
debouncedHello();
debouncedHello(); 

// "Hello!" should be printed **only once** after 1000ms, not three times.
