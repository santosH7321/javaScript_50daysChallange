const fs = require('fs');

fs.readFile("santosh.txt", "utf-8", function(err, data){
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log(data);
});



