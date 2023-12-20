/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined if the array is empty
    }
  
    let largest = arr[0]; // Assume the first element is the largest
  
    // Iterate through the array to find the largest element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }
  
  // Example array
  const numbers = [3, 7, 2, 9, 1];
  
  // Find the largest element
  const largestElement = findLargestElement(numbers);
  console.log("Largest element:", largestElement); // Output: 9
  

module.exports = findLargestElement;