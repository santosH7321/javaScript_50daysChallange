function findLargerNumber(num1, num2, num3){
    if(num1 > num2){
        return num1;
    }
    else if(num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}
    console.log(findLargerNumber(10, 20, 30)); //max is 30