//Write a function in JavaScript that finds the longest substring in a given string without repeating characters. The function should return the length of this substring.

function lengthOfLongestSubstring(s) {
    let seen = new Map(); // Stores last seen index of characters
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (seen.has(s[right])) {
            // Move 'left' to avoid repeating character
            left = Math.max(seen.get(s[right]) + 1, left);
        }
        seen.set(s[right], right); // Store/update character's index
        maxLength = Math.max(maxLength, right - left + 1); // Update max length
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3  ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1  ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3  ("wke")
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3  ("vdf")
console.log(lengthOfLongestSubstring("abcdef")); // Output: 6  ("abcdef")
