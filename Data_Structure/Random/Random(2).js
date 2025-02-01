// revers string with words 
const str = "Welcome to this Javascript Guide!" ;
// const ReversAll = str => str.split('').reverse().join('')
const ReversTest = string => {
    const words = string.split(' '); // Split string into words
    const reversedWords = words.map(word => word.split('').reverse().join('')); // Reverse each word
    return reversedWords.join(' '); // Join the reversed words
}  

// console.log(ReversAll(str));
console.log("REVERSE.TEST: " + ReversTest(str));

// const reverseWords = str => str.split(' ').reverse().join(' ')

// console.log(reverseWords(str));