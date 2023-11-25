// Q. Write a function that returns a promise which resolves after a specified number of milliseconds.


function delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
  
  // Test case 1
  console.log("start");
  delay(2000).then(() => {
    console.log("2 seconds elapsed");
  });
  console.log("end");
  
  // Output:
  // start
  // end
  // 2 seconds elapsed