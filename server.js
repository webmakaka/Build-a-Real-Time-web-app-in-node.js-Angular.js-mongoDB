var express = require('express');
var bodyParsere = require('body-parser');
var morgan = require('morgan');

var app = express();

app.listen(3000, function(){
    if(err){
        console.log(err);
    } else {
        console.log("Listening on port 3000");
    }
});
