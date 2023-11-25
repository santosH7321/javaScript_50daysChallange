// Q2. Write a function that returns a promise which rejects with a specified error message after a specified number of milliseconds.


/**
 * Returns a promise which rejects with a specified error message after a specified number of milliseconds.
 */
function rejectWithDelay(errorMessage, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(errorMessage));
      }, delay);
    });
  }
  
  // Example usage:
  rejectWithDelay("Oops! Something went wrong.", 2000).catch((error) => {
    console.error(error.message); // Output: Oops! Something went wrong.
  });