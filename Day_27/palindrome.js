/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the cleaned string is equal to its reversed version
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Test the isPalindrome function
console.log(isPalindrome("Nan")); // Output: true
console.log(isPalindrome("Hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true


module.exports = isPalindrome;
