// Activity 1: Array Creation and Access

// Task 1
let number = [1,2,3,4,5];
console.log(number); // Output: [1,2,3,4,5]

// Task 2

const firstElement = number[0];
const lastElement = number[number.length - 1];
console.log("First element: " + firstElement); // output: first element 1
console.log("Second element: " + lastElement); // output: second element 5


// Activity 2: Array Methods (Basic)

// Task 3

number.push(6); // Add element at the end
console.log(number); // output: [1, 2, 3, 4, 5, 6]

// Task 4

number.pop(); // Remove element at the end

console.log(number); // output: [1, 2, 3, 4, 5]

// Task 5

number.shift(); // Remove element at the front

console.log(number); // output: [2, 3, 4, 5]

// Task 6

number.unshift(10); // Add element at the front

console.log(number); // output: [10, 2, 3, 4, 5]


// Activity 3: Array Methods (Intermediate)

// Task 7

let newNum = [10,20,30,40,50];
const result = newNum.map(function(value) {
    return value * 2;
})
console.log(result); //Output: [ 20, 40, 60, 80, 100 ]

// Task 8

const arr = [5,7,8,9,10,11];
const filterResult = arr.filter(function(value) {
    return value % 2 === 0;
})
console.log(filterResult); // Output: [ 8, 10 ]


// Task 9

const sumReducer = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0)
console.log(sumReducer); // Output: 50

// Activity 4: Array Iteration

// Task 10

const arrayNumber = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < arrayNumber.length; i++) {
    console.log(arrayNumber[i]); // Output: [1,2,3,4,5,6,7,8]
}

// Task 11

arrayNumber.forEach(function(value) {
    console.log(value); // Output: [1,2,3,4,5,6,7,8,9,10]
})

// Activity 5: Multi-dimensional Arrays

// Task 12: 

let twoDimensionalArrays = [[1,2,3,4,5], [6,7,8,9,10]];
const matrix = twoDimensionalArrays.map(function(number) {
    console.log(number); // Output: [1,2,3,4,5] [6,7,8,9,10]
})

console.log(matrix); // Output: [ 1, 2, 3, 4, 5 ][ 6, 7, 8, 9, 10 ]


// Task 13:

console.log(twoDimensionalArrays[0][1]); // Output: 2
console.log(twoDimensionalArrays[0][2]); // Output: 3