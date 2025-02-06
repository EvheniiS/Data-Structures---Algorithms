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


//***SOME***
//1. Is there at least one male character?
const isArrHasMale = characters.some(char => char.gender === 'male')
// console.log(isArrHasMale)

//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(char => char.eye_color === 'blue')
// console.log(oneBlueEyes)

//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some(char => char.height > 210)
// console.log(oneTallerThan210)

//4. Is there at least one character that has mass less than 50?
const oneMassLessThan50 = characters.some(char => char.mass < 50)
// console.log(oneMassLessThan50)

