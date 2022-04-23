var fs = require('fs');

// anonymous callback function to make it async
// fs.readFile('./data.json', function (err, data) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('data', data);
//     }
// });

fs.readFile('./data.json', (err, data) => { // arrow function
    if (err) {
        console.log('error', err);
    } else {
        console.log('data', data);
    }
});