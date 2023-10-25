function getPropertyValues(arr, propName) {
    // Using Array.map() method to get the values of the specified property
    const values = arr.map((obj) => obj[propName]);
  
    return values;
  }
  
  // Test cases
  const people = [
    { name: "Santosh", age: 21, gender: "male" },
    { name: "Nishant", age: 21, gender: "male" },
    { name: "Vivek", age: 21, gender: "male" },
  ];
  
  console.log(getPropertyValues(people, "name")); // ["Santosh", "Nishant", "Vivek"]
  console.log(getPropertyValues(people, "age")); //  [21, 21, 21]
  console.log(getPropertyValues(people, "gender")); // ["male", "male", "male"]
  console.log(getPropertyValues(people, "address")); // [undefined, undefined, undefined]