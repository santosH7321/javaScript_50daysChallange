//Q3. Write a function that returns a promise which resolves with an array of random numbers after a specified number of milliseconds.

function getRandomNumbersArray(length, delay) {
    return new Promise((resolve, reject) => {
      // Using setTimeout to simulate delay
      setTimeout(() => {
        // Creating an array of random numbers of specified length
        const numbersArray = Array.from({ length }, () => Math.floor(Math.random() * 100));
        // Resolving the promise with the generated array
        resolve(numbersArray);
      }, delay);
    });
  }
  
  // Testing the function with delay of 2 seconds and array length of 5
  getRandomNumbersArray(5, 2000)
    .then((result) => {
      console.log(result); // Output: [23, 74, 48, 52, 63]
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Testing the function with delay of 3 seconds and array length of 10
  getRandomNumbersArray(10, 3000)
    .then((result) => {
      console.log(result); // Output: [79, 5, 64, 46, 2, 55, 33, 71, 28, 38]
    })
    .catch((error) => {
      console.error(error);
    });