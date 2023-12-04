// Write a function that takes a string as input and returns true if the string contains only alphabets, and false otherwise.

function containsOnlyAlphabets(str) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
  }
  
  console.log(containsOnlyAlphabets("abcDEF")); // true
  console.log(containsOnlyAlphabets("123")); // false
  console.log(containsOnlyAlphabets("a b c")); // false
  console.log(containsOnlyAlphabets("")); // false