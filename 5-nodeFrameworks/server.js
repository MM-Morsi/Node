var express = require('express');
// instance of express
var app = express();

// serve static content
app.use(express.static(__dirname));

var server = app.listen(3000, () => {
    console.log('listening on port', server.address().port);
}); // listen on port 3000

