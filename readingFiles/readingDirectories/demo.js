var fs = require('fs');

// reading directories
fs.readdir('c:/', (err, data) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log('data', data);
    }
});

// Writing files to the file system
var data = {
    name: 'John'
}

let path = 'c:/Users/moham/Documents/Web/Node/readingFiles/readingDirectories/test.txt';

fs.writeFile(path, JSON.stringify(data), (err) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log('file written');
    }
});

