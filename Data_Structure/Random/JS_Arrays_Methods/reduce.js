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

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
// console.log(totalMass)

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
// console.log(totalHeight)

//3. Get total number of characters by eye color
const charEyeCollor = characters.reduce((acc,char) => {
    const color = char.eye_color

    if (acc[color]) {
       acc[color]++;
    } else {
        acc[color] = 1 
    }
    return acc;
}, {})
// console.log(charEyeCollor)

//4. Get total number of characters in all the character names
const totalNameCharactersInName = characters.reduce((acc, char) => acc + char.name.length, 0)
console.log(totalNameCharactersInName)
