/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSumTime(n) {
    const startTime = new Date().getTime(); // Get the current time in milliseconds
    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    const endTime = new Date().getTime(); // Get the current time after the computation
    const timeTaken = (endTime - startTime) / 1000; // Calculate time taken in seconds
  
    console.log(`Time taken to calculate sum from 1 to ${n}: ${timeTaken} seconds`);
  }
  
  // Calculate time for different values of n
  calculateSumTime(100);
  calculateSumTime(100000);
  calculateSumTime(1000000000);
  