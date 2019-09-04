const path = require('path');
const express = require('express');
const app = express();

const PATH_TO_INDEX = path.join(__dirname,'..', 'dist/index.html');
const PATH_TO_STATIC = path.join(__dirname,'..', 'dist');
// console.log(PATH_TO_INDEX);
// console.log(PATH_TO_STATIC);

app.use(express.static(PATH_TO_STATIC));

app.get('*', function (req, res) {
    res.sendFile(PATH_TO_INDEX);
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
