let score = 40;
console.log(score); //40

const balance = new Number(100);
console.log(balance) // [Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.8934;

console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString(`en-IN`));


console.log(balance.toExponential()); //1e+2