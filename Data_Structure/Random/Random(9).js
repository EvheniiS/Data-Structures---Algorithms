// Write a function in JavaScript that takes a string and returns true if it is a palindrome, 
// otherwise false. A palindrome is a word, phrase, or sequence that reads the same backward as forward. 
// Ignore case and non-alphanumeric characters.

function isPalindrome(str) {
    let sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(sanitizedStr)

    let reversedStr = sanitizedStr.split('').reverse().join('');
    console.log(reversedStr)
    return console.log(sanitizedStr  === reversedStr)
}



isPalindrome("racecar"); // Output: true
isPalindrome("hello"); // Output: false
isPalindrome("A man, a plan, a canal, Panama!"); // Output: true
isPalindrome("No 'x' in Nixon"); // Output: true
