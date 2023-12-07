function reverseStars(num){
    for(let i = num; i>=1; i--){
        let stars = " ";
        for(let j = 1; j<=i; j++){
            stars += '* ';
        }
        console.log(stars);

    }
}

let number = reverseStars(5);
console.log(number);