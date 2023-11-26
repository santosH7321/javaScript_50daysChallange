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
// roomMat[1] = 'Santosh_Kumar_Yadav';
// console.table(roomMat);


// console.log(roomMat.length);
// console.log(roomMat.indexOf());
// console.log(roomMat.push("Mrinal_kumar"));
// console.log(roomMat);
// console.table(roomMat);
// console.log(roomMat.findIndex("Mrinal_kumar"));

let arr2 = ['Upendra', "Arun", "Anil", "Sunil"];
// console.log(roomMat.join());
// console.log(roomMat + arr2);
// console.log(arr2.concat());
// console.log(...roomMat + (arr2));

// console.log(roomMat.find("Nishant_Ranjan"));

// console.log(...roomMat, ...arr2);



const myArr = [0,1,2,3,4,5];
const myHero = ["Santosh", "Kumar", "Yadav"];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr[0], myArr[1]);
// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(-1);
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9)); // false it is checking index
// console.log(myArr);


// console.log(myArr.indexOf(3)); //3
// console.log(myArr);

// const newArr = myArr.join();
// console.log(newArr);

// console.log(...myArr, ...roomMat);

// Objects -------
const jsUser = {
    name: "Santosh",
    age: 21,
    location: "Bihar",
    email: "santoshkumar23kky@gmail.com",
    isLogedIn: false,
    isLogedIn_A_Day: ["monday", "saturday"]
}
// console.log(jsUser.name);
// console.log(jsUser.isLogedIn_A_Day);

// SYMBOL
const mySym = Symbol("key1");
// console.log(jsUser.mySym); //undefined

jsUser.email = "santoshkumar24kky@gmail.com";
Object.freeze(jsUser);
// console.log(jsUser);
// console.log(Object.freeze(jsUser));

// object are two type
// so first is singlton object ex- const santosh = new object()
// and second is Non-singlton object ex- const santosh_kumar = {}

const tinderUser = new Object()

tinderUser.id = '123abc'
tinderUser.name = "Santosh"
tinderUser.isLogIn = false

// console.log(tinderUser);


const regularUser = {
    email: 'santoshkuma123@gmail.com',
    fullName: {
        userFirstName: "Santosh",
        lastName: "Kumar"
    }
}
// console.log(regularUser.fullName); // output { userFirstName: 'Santosh', lastName: 'Kumar' }

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3);
const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "santoshkumar23kky@gmail.com"
    },

    {
        id: 2,
        email: "santoshkumar123@gmail.com"
    }

]
// console.log(users);
// users[1].email
// console.log(users.email);


// object Destucturing
const course = {
    courseName: "js in Hindi",
    price: "999",
    courseInstructor: "Santosh"

}
// console.log(course);
const {courseInstructor: Instructor} = course
const {courseInstructor} = course
console.log(courseInstructor);
console.log(courseInstructor)


