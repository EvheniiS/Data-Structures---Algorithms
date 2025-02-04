// How many R`s in the word "strawberry" OR how many {char} in {string}

function howManyChar(word, char) {
    if (typeof word !== 'string' || typeof char !== 'string') {
        console.log(`Text input should have strign format`)
    } 
    
    if (char.length !== 1) {
        return `The character input should be a single character.`;
    }
    
    const count  = word.toLowerCase().split('').filter(c => c === char).length;

    return `The word "${word}" contain ${count} characters "${char}"`
}


console.log(howManyChar("strawberry", "r"))