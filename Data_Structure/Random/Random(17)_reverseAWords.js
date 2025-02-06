
function reverseWords (str) {
    reverced = str.split(' ').reverse().join(' ')
    return console.log(reverced)
}

function reverseWords2 (str) {
    let words = [],
        word = ''

    for(let char of str) {
        if (char === ' ') {
            words.push(word);
            word = '';
        } else {
            word += char
        }
    }

    words.push(word); // Push the last word
    console.log(words); // Output: ["Hello", "World"]

    let revesed = [];

    for( let i = words.length -1; i >= 0; i--) {
        revesed.push(words[i]);
    }

    console.log(revesed.join(' '))

}


reverseWords2("Hello World"); // Output: "World Hello"
// reverseWords2("JavaScript is awesome"); // Output: "awesome is JavaScript"
// reverseWords2("Coding interviews are fun"); // Output: "fun are interviews Coding"
