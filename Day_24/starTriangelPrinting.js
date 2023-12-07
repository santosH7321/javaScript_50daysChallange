function star(num){
    for(let i = 1; i<=num; i++){
        let stars = " ";
        for(let j = 1; j<=i; j++){
            stars += '* ';
        }
        console.log(stars);

    }
}

let number = star(5);
console.log(number);