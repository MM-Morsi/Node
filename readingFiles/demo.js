var fs = require('fs');

// anonymous callback function to make it async
// fs.readFile('./data.json', function (err, data) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('data', data);
//     }
// });

fs.readFile('./data.json', 'utf-8', (err, data) => { // arrow function
    if (err) {
        console.log('error', err);
    } else {
        console.log('readFile method:', data);
    }
});

var data = require('./data.json');
console.log('require method:', data.name);

// JSON.parse 
fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('error', err);
    } else {
        // data = JSON.parse(data);
        console.log('readFile method + json parse:', JSON.parse(data).name);
    }
});