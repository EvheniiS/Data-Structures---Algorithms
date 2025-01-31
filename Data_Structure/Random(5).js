//Write a function that finds the longest word in an object of word counts.

const words = { apple: 3, banana: 2, watermelon: 5, kiwi: 4 };


const longestWord = obj => {
    return Object.entries(obj).reduce((acc, el) => {
        let longestWord 
        if (acc.length > el[0].length) {
            longestWord = acc
            return acc
        }
        return longestWord
    }, ""); // Initial value should be an empty string
};


function longestWord2 (obj) {
    const wordsArr = Object.keys(obj)
    console.log(wordsArr)

    const LongestWord = wordsArr.reduce((acc, el) => {
     if (acc.length > el.length) {
        return acc
      } else {
        return el
    }
    },'')
    return `longest word is ${LongestWord}`
}


console.log(longestWord2(words)); 
// Expected Output: "watermelon" (because it's the longest word)