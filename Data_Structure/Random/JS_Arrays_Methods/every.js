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

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(char => char.eye_color === 'blue')
// console.log(allBlueEyes)

//2. Does every character have mass more than 40?
const allMassMoreThen40 = characters.every(char => char.mass > 40)
// console.log(allMassMoreThen40)

//3. Is every character shorter than 200?
const allShorterThan200 = characters.every(char => char.height < 200)
// console.log(allShorterThan200)

//4. Is every character male?
const allMale = characters.every(char => char.gender === 'male')
console.log(allMale)
