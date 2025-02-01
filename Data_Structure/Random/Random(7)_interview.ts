// //Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(n:number):string {
    return n >= 0 ? `${n} is even` : `${n} is odd`
  }
  
  const result = evenOrOdd(10) 
  
  console.log(result)
  
  
  
  // // You get an array of numbers, return the sum of all of the positives ones.
  
  function positiveSum(arr:number[]):number {
    let allPositives = arr.filter((item) => item > 0).reduce((acc, el) => acc + el, 0 );
    return allPositives
  }
  
  const result1 = positiveSum([1, -4, 7, 12] )  
  
  console.log(result1)