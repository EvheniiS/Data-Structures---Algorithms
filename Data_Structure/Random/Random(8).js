// Write a function in JavaScript that takes an array of integers
// and returns a new array with only the unique elements,
// preserving the original order.

function uniqueElements2(arr) {
  let uniqueSet = new Set(arr)
  return console.log(uniqueSet);
}


uniqueElements([1, 2, 3, 2, 4, 1, 5]); // Output: [1, 2, 3, 4, 5]
uniqueElements([7, 8, 8, 9, 10, 7, 10]); // Output: [7, 8, 9, 10]


function uniqueElements(arr) { 
  let uniqueArr = [] 

  for (num of arr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }
  return console.log(uniqueArr)
}