function reverseString(str) {
let reversedString = str.split('').reverse().join('');
return console.log(reversedString)
}

function reverseString2(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    
    function addToArray(array) {
      if (array.length > 0) {
        reversedArray.push(array.pop());
        addToArray(array);
      }
      return;
    }
    addToArray(arrayStr);
    return console.log(reversedArray.join(""))
  }

// reverseString2("yoyo master");

function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    } 
    return reverseStringRecursive(str.slice(1)) + str[0];
}


console.log(reverseStringRecursive("yoyo master"))