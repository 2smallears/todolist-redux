"use strict";

const express = require('express');

const bodyParser = require('body-parser');
const app = new express();
const todos = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./views'));

app.use(express.static('./public'));
app.use(express.static('./dist'));

app.get('/todolist', (req, res) => {
    res.json(todos);
});


app.post('/addtodos', (req, res)=> {
    todos.push({text:req.body.text,isDone:false});
    res.json(todos);
});
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('listening at port %s', port);
});

