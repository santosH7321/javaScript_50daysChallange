function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

function sumOfSquare(a, b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2; 
}

function sumOfCube(a, b, c){
    const value1 = cube(a);
    const value2 = cube(b);
    const value3 = cube(c);

    return value1 + value2 + value3;
}

console.log(sumOfSquare(1, 2)); //5

console.log(sumOfCube(2, 3, 4)); //99