let arr = [1,2,3,4,5,6,7,8,9];
let largest = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
        
    }
}

console.log("Biggest number is: ", largest);