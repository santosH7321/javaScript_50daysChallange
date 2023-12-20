/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert strings to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
  
    // Check if the lengths of the cleaned strings are different
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    // Sort the characters in both strings and compare them
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    // Return true if the sorted strings match, else false
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
  const word1 = "listen";
  const word2 = "silent";
  console.log(isAnagram(word1, word2)); // Output: true
  
  
  module.exports = isAnagram;
  