const name = "santosh";
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//---------Method2---------
const gameName = new String('santosh');
// console.log(gameName[0]);
// console.log(gameName.___proto___);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 5);

// console.log(newString);

const anotherString = gameName.slice(-7, 5);
// console.log(anotherString);

const newStringOne = " santosh ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://santosh-kumar.com";
console.log(url.replace('-', '%20')); //replace function is replace the value(search, replace the value)

console.log(url.includes('santosh')); //include function is search (content)
console.log(url.includes('Nishant'));

const owenor = 'santosh-kumar-yadav';
console.log(owenor.split('-')); //split that mean remove
