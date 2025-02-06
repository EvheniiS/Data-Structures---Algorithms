//Write a function in JavaScript that takes an array of unsorted integers 
//and returns the first missing positive integer
//in O(n) time complexity and O(1) space complexity (without using extra data structures).



function firstMissingPositive(arr) {

    const newSet = new Set(arr)

    let missing = 1;

    while(newSet.has(missing)) {
        missing++
    }

    return console.log(missing)
}

function firstMissingPositive_O_1_SpaceComp(arr) {
    let n = arr.length;

    // Step 1: Place each number in its correct position (Cyclic Sort)
    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[arr[i] - 1]) {
            // Swap arr[i] with arr[arr[i] - 1] to put it in the correct position
            [arr[i], arr[arr[i] - 1]] = [arr[arr[i] - 1], arr[i]];
        }
    }

    // Step 2: Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1; // First missing positive
        }
    }

    // If all numbers are in place, return n + 1
    return n + 1;
}

firstMissingPositive([3, 4, -1, 1]); // Output: 2
firstMissingPositive([1, 2, 0]); // Output: 3
firstMissingPositive([7, 8, 9, 11, 12]); // Output: 1
firstMissingPositive([2, 1]); // Output: 3
