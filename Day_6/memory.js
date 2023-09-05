//stack(primitive ) => copy of original value
// Heap(Non- Primitive) => refrence of original value

//<--------------Primitive------------>
let myNameIs = "Santosh Kumar";
let anotherName = "santosh kumar yadav";
    anotherName = "santosh yadav";

    // console.log(myNameIs); //Santosh Kumar
    // console.log(anotherName); //santosh yadav


    //<-----------Non-Primitive--------->

    let userOne = {
        email: "santoshkumar23kky@gmail.com",
        upi: "93949044390@ybl"
    }
    let userTwo = userOne;
    userTwo.email = "santoshkumar24kky@gmail.com";

    // console.log(userOne.email); // "santoshkumar23kky@gmail.com"

    // console.log(userTwo.email); // "santoshkumar23kky@gmail.com"