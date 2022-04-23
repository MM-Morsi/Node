var fs = require('fs');

// reading directories
fs.readdir('c:/', (err, data) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log('data', data);
    }
});

// Writing files 

var data = {
    name: 'John'
}
fs.writeFile('c:/Users/moham/Documents/Web/Node/readingFiles/readingDirectories/test.txt', JSON.stringify(data), (err) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log('file written');
    }
});

