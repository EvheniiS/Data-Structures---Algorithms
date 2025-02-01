const countNumbers = arr => {
    return arr.reduce((acc, num) => {
        acc[num] = (acc[num] ?? 0) + 1;
        return acc;
    }, {});
};

const countNumber = arr => {
    return arr.reduce((acc, el) => {
        if (acc[el] ?? 0 ) {
            acc[el] = 1            
        } else {
            acc[el]++
        }
        
        return acc
    }, {})
} 
// Example usage:
console.log(countNumbers([1, 2, 2, 3, 1, 3, 3, 3]));
// Expected Output: { '1': 2, '2': 2, '3': 4 }
