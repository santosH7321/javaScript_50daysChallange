// Taskt 1 Function Declarations

function evenOdd() {
  let num = 5;
  let result = num % 2 === 0 ? "even" : "odd";
  console.log(`This number is ${num} and ${result}`);
}
evenOdd();

// Tast 2

function square() {
  let num = 4;
  let result = num * num;
  console.log(`The square of ${num} is ${result}`);
}

square();

// Task 3 function Expression

const maxTwoNum = function (num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
};
maxTwoNum(2, 5);

// Task 4

const addString = function (str1, str2) {
  let result = str1 + str2;
  console.log(`This is Added two strings: ${result}`);
};
addString("Santosh", "Kumar");

// Arrow functions
// Taks 5

const sumOfTwoNum = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${sum}`);
};

sumOfTwoNum(3, 7);

// Task 6

const charCheck = (str, char) => str.includes(char);
console.log(charCheck("santosh", "a")); // true

// Function Parameters and Default values

// Task 7

function mul(a, b = 1) {
  let prod = a * b;
  console.log(prod);
}

mul(5, 10); // output is 50
mul(5); // output is 5 because it is Default parameters

// Task 8

function greet(name, age = 21) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
greet("Santosh"); // output is Hello Santosh, you are 21 years old.

// Higher Order Functions

// Task 9

function repeatFunction(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

// Example usage:
const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3);
// Outputs:
// Hello!
// Hello!
// Hello!

// Task 10

function applyFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}

// Example usage:
const addOne = (x) => x + 1;
const square = (x) => x * x;

const result = applyFunctions(addOne, square, 3);
console.log(result); // Outputs: 16
