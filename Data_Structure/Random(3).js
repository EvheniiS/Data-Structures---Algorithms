// define a function that takes an array of strings and return the most commonly occuring sting in that array 

const mostCommonStrings = string => {
    const commonStrings = {}
    
    string.forEach(str => {
        if (commonStrings[str] === undefined) {
            commonStrings[str] = 1
        } else {
            commonStrings[str]++
        }
    });

    let maxEntry;
    let maxValue = 0

    for (commonString in commonStrings) {
            console.log(commonString, ":", commonStrings[commonString]);
        
        if(commonStrings[commonString] > maxValue) {
            maxEntry = commonString
            maxValue = commonStrings[commonString];
        }
    }
    return maxEntry
}

//-----------------------------------------------------------\\

const mostCommonStrings2 = arr => {
    const mapping = arr.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc
    }, {});

    return Object.entries(mapping).reduce(
        (acc, el) => (el[1] > acc[1] ? el : acc),
        [null, 0]
    )[0]
};

const generateTestData = (numStrings, uniqueStrings) => {
    const testData = [];
    for (let i = 0; i < numStrings; i++) {
        // Randomly select a string from the uniqueStrings array
        const randomString = uniqueStrings[Math.floor(Math.random() * uniqueStrings.length)];
        testData.push(randomString);
    }
    return testData;
}

// Example usage
const uniqueStrings = ['apple', 'banana', 'orange', 'apple', 'banana', 'kiwi'];
const testData = generateTestData(10, uniqueStrings);
console.log(testData);

console.log(mostCommonStrings(testData))

