//Find a pair of arrays items that = Sum 
//Sum 8 


function hasPairWithSum(sum, data) {
  let low = 0,
      hi = data.length - 1;

  while (low < hi) {
    const s = (data[low] + data[hi]);
    if (s === sum) {
      console.log(`Low is: ${data[low]}, and high is ${data[hi]}`)
      return true;
    } else if ((s < sum) ) {
      low++;
    } else {
      hi--;
    }
  }
  console.log('We could find corect pair')
  return false;
}

const array = [1, 2, 4, 6];
console.log(hasPairWithSum(8, array));

//2nd attempt 
function hasPairWithSum2(data, sum) {
  const complements = new Set();
  
  for (const value of data) {
      if (complements.has(value)) {
          return true;
      }
      complements.add(sum - value);
  }
  return false;
}

// Test cases
console.log(hasPairWithSum2([1, 2, 3, 9], 8));  // false
console.log(hasPairWithSum2([1, 2, 4, 4], 8));  // true

//-------------
//Given 2 arrays, creat a function thant let's a user tknow (true/false )

// whether theese two rrays contain any common items
//For Example
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
//Should return False
// ---- 
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x', ];
//Should return true

// 2 parametrs - arrays - no size limit
// return true or false 

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x', ];
//O(a*b)
function containsCommonItem(arr1, arr2){
  for (let i =0 ; i < arr1.length; i++){
    for(let j=0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j])
        return true;
    }
  }
  return false
}

containsCommonItem(array1, array2);

//array1 ==> obj {
// a: true.
// b: true.
// c: true.
// x: true.
// a: true.
//}
// array2[index] ==== onj.properties

function containsCommonItem2(arr1,arr2){

}