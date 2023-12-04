// Write a function that takes a string as input and returns the number of vowels in the string.

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels("Pranay")); // expected output: 2
  console.log(countVowels("hello")); // expected output: 2
  console.log(countVowels("abcdefghijklmnopqrstuvwxyz")); // expected output: 5
  console.log(countVowels("aeiou")); // expected output: 5
  console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // expected output: 0
  console.log(countVowels("The quick brown fox jumps over the lazy dog")); // expected output: 11
  console.log(countVowels("12345")); // expected output: 0