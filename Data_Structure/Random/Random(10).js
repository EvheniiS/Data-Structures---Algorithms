// Write a function that takes a sorted array of integers and a target value. 
// The function should return the indices of two numbers in the array that add up to the target. 
// Assume there is exactly one solution and that the same element cannot be used twice.

function twoSum1 (arr,target) {

    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++ ) {
             if(arr[i] + arr[j] === target){
                console.log(`We found sum of ${target} with ${arr[i]} + ${arr[j]}`);
                return [i, j]
            }
        }
    }
    console.log("Couldn't find a sum");
    return []
}


function twoSum2(arr, target) {
    let seen = new Map();

    for (let i = 0; i < arr.length; i++) {
        let neededValue = target - arr[i];
        
        if (seen.has(neededValue)) {
            console.log(`Found: ${arr[seen.get(neededValue)]} + ${arr[i]} = ${target}`);
            return [seen.get(neededValue), i];
        }

        seen.set(arr[i], i);
    }
    console.log("No pair found.");
    return []; // If no solution is found
}


function twoSum3(arr, target) {
    let left = 0,
        right = arr.length-1
    while(left < right) {
        let sum = arr[left] + arr[right]
        if(sum ===target) {
        console.log( `We foudn a sum of ${target} pair with ${arr[left]} + ${arr[right]}`) 
        return [left , right]
        } else {
            sum < target ? left++ : right--
        }
    }
    console.log(`We could find match`)
    return []
}

twoSum3([1, 2, 3, 4, 6], 6); // Output: [0, 2]  (1 + 3 = 6)
twoSum3([2, 7, 11, 15], 9); // Output: [0, 1]  (2 + 7 = 9)
twoSum3([-3, -1, 0, 3, 6], 3); // Output: [1, 3]  (-1 + 3 = 3)
