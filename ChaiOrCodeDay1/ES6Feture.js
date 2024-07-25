// Activity 1 : Template literals

//Task 1

const name = "Santosh";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);

// Task 2

const str = `My name is
Santosh kumar
and i am from GEC Jamui`;

console.log(str);

// Activity 2 : Destructuring 

// Task 3

const arr = [1, 2, 3, 4];

const [first, second] = arr;

console.log(first); // 1
console.log(second); // 2

// Task 4

const obj = {
    name: "Santosh",
    age: 25
}
const { name, age } = obj;

console.log(name); // Santosh

console.log(age); // 25

// Activity 3 : Spread and Rest Operators

// Task 5

const arr1 = [1, 2, 3];
const newArray = [...arr1, 4, 5, 6];
console.log(newArray);  // [1, 2, 3, 4, 5, 6]

// Task 6

function sumAll(...numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
  }
  
  const result = sumAll(1, 2, 3, 4, 5, 6);
  console.log(result); // 21

//   Activity 4: Default Parameters

// Task 7
function def(num1, num2=1){
    return num1 * num2;
}

console.log(def(5)); // 5

// Activity 5: Enhenced Object Literals

// Task 8
const name = 'Santosh';
const age = 22;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

console.log(person);

person.greet(); // Hello, my name is Santosh and I am 22 years old.

  
// Task 9

const propertyName = 'dynamicProperty';
const propertyValue = 'This is a dynamic value';

const obj = {
  [propertyName]: propertyValue
};

console.log(obj); // { dynamicProperty: 'This is a dynamic value' }
