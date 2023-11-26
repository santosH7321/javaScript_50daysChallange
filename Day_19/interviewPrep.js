// let a = 4 , b = 5, sum;
// sum = a + b;
// console.log(sum);

// let a = "Santosh", b = " Kumar", fullName;
// fullName = a + b;
// console.log(fullName);

// const accountId = 12345;
// let accountEmailId = "santoshkumar23kky@gmail.com";
// var accountPassword = '12344';
// accountCity = 'Patna';
// console.table([accountId, accountEmailId, accountPassword, accountCity]);


// Data type 
// let name = 'santosh';
// let age = 18;
// let isLogin = true;

// console.table([typeof(name), typeof(age), typeof(isLogin)]);


// let power = 2**3;
// let santosh;
// let sym = $;

// console.table([typeof(power), typeof(santosh)]);
// console.log(power);


// console.log(typeof null);
// console.log(typeof undefined);

// COVERSION OPERATION

let score1 = 33;
let score2 = "33";
let score3 = "33abc";


// console.log(typeof(score1));
// console.log(typeof score1);
// console.log(typeof score2);
// console.log(typeof score3);

let scoreInNumber = Number(score1);
// console.log(typeof scoreInNumber); //Type conversion

let score2InNumber = Number(score2);
// console.log(typeof score2InNumber); // String to number

let score3InNumber = Number(score3);
// console.log(typeof score3InNumber);

// console.table([scoreInNumber, score2InNumber, score3InNumber]); // 33, 33 , NaN
// console.table([typeof (scoreInNumber), typeof (score2InNumber), typeof (score3InNumber)]); //num , num, num

let isLogin = 1;
let booleanIsLogin = Boolean(isLogin);
// console.log(booleanIsLogin); // true

let isLogIn = 0;
let booleanIsLogIn = Boolean(isLogIn);
// console.log(booleanIsLogIn); //false


// console.log(+true); // 1
// console.log(-true); //-1
// console.log(+""); //0
// console.log(-""); //-0
// console.log(""); //Empety a space

let Empety = "";
// console.log(Empety);
// console.log(typeof Empety);


//OPERATION

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 +2); //122
// console.log(1 + 2 + "2"); //32


//COMPARESION OPERATOR
// console.log("2">1); //true
// console.log("2"<1); //false
// console.log(null>0); //false
// console.log(null == 0); //false
// console.log(null>=0); //true
// console.log("2"== 2); //true
// console.log('2' === 2); //false


// DATA TYPES

// Data type is bacically two type so first is primitive and second is Non-primitive
//primitive - is 7 types
// string, Number, Boolean, null, undefined, symbol, BigInt.

// Non-primitive type (Reference)
// Array, Objects, Functions

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId); //false
// console.log(id == anotherId); //false

// ARRAY
const roomMat = ["Nishant_Ranjan", "Santosh_kumar", "Vivek_Raj"];
// console.log(roomMat);
// console.log([roomMat]);
// console.table(roomMat);
roomMat[1] = 'Santosh_Kumar_Yadav';
// console.table(roomMat);


// console.log(roomMat.length);
// console.log(roomMat.indexOf());
// console.log(roomMat.push("Mrinal_kumar"));
// console.log(roomMat);
// console.table(roomMat);
// console.log(roomMat.findIndex("Mrinal_kumar"));

let arr2 = ['Upendra', "Arun", "Anil", "Sulil"];
// console.log(roomMat.join());
// console.log(roomMat + arr2);
// console.log(arr2.concat());
// console.log(...roomMat + (arr2));

// console.log(roomMat.find("Nishant_Ranjan"));

