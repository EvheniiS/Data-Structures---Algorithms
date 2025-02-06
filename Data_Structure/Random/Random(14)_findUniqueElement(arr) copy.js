//You are given an array of integers where each element appears twice,
//  except for one unique element that appears only once.
//Implement a function in JavaScript to find the unique element.

function findUniqueElement(arr) {
    if(!Array.isArray(arr) )  {
        console.log(`Function expecting array data type`);
    } else if (arr.length === 0) {
        console.log(`Array is empty`);
    }

    let countMap = new Map();

    for (let num of arr ) {
        countMap.set(num , (countMap.get(num) || 0 ) + 1)
    }

    for (let [key, value] of countMap) {
        if ( value === 1) { 
            return key
        }
    }
}

function singleNonDuplicate(arr) {
    let left = 0, right = arr.length - 1;

    while(left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === arr[mid ^ 1]) {
            left = mid + 1; // move right
        } else {
            right = mid; //move left
        }
    }
    return arr[left]; // The unique element
}




console.log(findUniqueElement([4, 3, 2, 3, 4])); // Output: 2
console.log(findUniqueElement([1, 1, 2, 2, 3])); // Output: 3
