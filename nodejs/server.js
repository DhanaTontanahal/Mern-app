var express = require('express');

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


app.get('/users', function (req, res) {
    res.json('dhana');
});

app.listen(8080, function () {
    console.log("server up at 8080")
})