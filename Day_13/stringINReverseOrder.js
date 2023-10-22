// Define the string to reverse
const originalString = "Santosh";

// Define a function that takes a string parameter
function reverseString(str) {
  // Convert the string to an array, reverse the array, then join it back into a string
  const reversedString = str.split("").reverse().join("");
  // Return the reversed string
  return reversedString;
}

// Call the function with the original string and output the result to the console
console.log(reverseString(originalString));