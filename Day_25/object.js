const allUser = [{
    
        firstName: "Santosh",
        gender: "Male"
    }, {
        firstName: "Nishant Ranjan",
        gender: "Male"
    }, {
        firstName: "Aray",
        gender: "Female"
    }

];

for(let i = 0; i<allUser.length; i++){
    if(allUser[i] ["gender"] == "Male"){
        console.log(allUser[i]["firstName"]);
    }
}