// Q. Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// Define a function that takes a number parameter
function sumOfNumbers(number) {
    // Define a variable to store the sum
    let sum = 0;
    // Use a for loop to iterate from 1 to the given number
    for (let i = 1; i <= number; i++) {
      // Add the current iterator value to the sum variable
      sum += i;
    }
    // Return the sum
    return sum;
  }
  
  // Call the function with different test cases to see the output
  console.log(sumOfNumbers(10)); // Expected output: 55
  console.log(sumOfNumbers(1)); // Expected output: 1
  console.log(sumOfNumbers(5)); // Expected output: 15
  console.log(sumOfNumbers(0)); // Expected output: 0
  console.log(sumOfNumbers(-5)); // Expected output: 0