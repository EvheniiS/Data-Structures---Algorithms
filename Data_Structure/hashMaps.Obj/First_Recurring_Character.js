//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

array = [2,5,5,2,3,5,1,2,4] // positive
array2 = [2,3,4,5] //negative 

function firstRecurringCharacter2(input) {
    for ( let i = 0; i < input.length; i++ ) {
        for ( let j = i + 1; j < input.length; j++ ) {
            if(input[i] === input[j]) {
                return[i]
            }
        }
    }
    return undefined
} //O(n^2)


function firstRecurringCharacter2(input) {
    // Input validation
    if (!Array.isArray(input)) {
        return 'Input must be an array';
    }
    
    const seen = {}; // Use an object to track seen elements
    for (let element of input) {
        if (typeof element !== 'number' && typeof element !== 'string') {
            return 'Array must contain only numbers or strings';
        } 
        if (seen[element]) { // Check if the element has been seen
            return element; // Return the first recurring character
        }
        seen[element] = true; // Mark the element as seen
    }
    return undefined; // Return undefined if no recurring character is found
}


function firstRecurringCharacter3(input) {
    let map = {}
    for (let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i;
        }
    }
    return undefined
}
console.log(firstRecurringCharacter3(array));