// Write a function that logs an error message to the console if a certain condition is not met.


function logErrorIf(condition, message) {
    if (!condition) {
      console.error(message);
    }
  }