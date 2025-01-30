const calls = [
    { name: "Jamie", numOfCalls: 7 },
    { name: "Anna", numOfCalls: 2 },
    { name: "Sam", numOfCalls: 3 },
    { name: "Tony", numOfCalls: 8 },
    { name: "Jamie", numOfCalls: 7 },
    { name: "Anna", numOfCalls: 1 },
    { name: "Sam", numOfCalls: 16 },
    { name: "Tony", numOfCalls: 1 },
    { name: "James", numOfCalls: 1 },
];

const totalCallsPerPerson = calls.reduce((callsByName, item ) => {
    const currentName = item.name;

    if (callsByName.hasOwnProperty(currentName)) {
        callsByName[currentName] = callsByName[currentName] + item.numOfCalls;
    } else {
        callsByName[currentName] = item.numOfCalls;
    }

    return callsByName;

}, {})

console.log(totalCallsPerPerson)

const sortedArray = []

for ( const name in totalCallsPerPerson) {
    sortedArray.push({name: name, numOfCalls: totalCallsPerPerson[name]})
}

console.log(sortedArray)

sortedArray.sort((a, b) => {
    return b.numOfCalls - a.numOfCalls; 

})