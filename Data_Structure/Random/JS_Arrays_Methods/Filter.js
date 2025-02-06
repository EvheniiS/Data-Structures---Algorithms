const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***FILTER***
//1. Get characters with mass greater than 100

const greater100Characters = characters.filter(char => char.mass > 100)
// console.log(greater100Characters)
//2. Get characters with height less than 200
const heightLess200 = characters.filter(char => char.height <  200)
// console.log(heightLess200)

//3. Get all male characters
const onlyMale = characters.filter(char => char.gender === 'male');
// console.log(onlyMale)

//4. Get all female characters
const onlyFem = characters.filter(char => char.gender === 'female');
console.log(onlyFem)