fs = require('fs');

// callback function to make it async 
data = fs.readdir('c:/', function (err, data) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('data', data);
    }
});

console.log("This comes before data");