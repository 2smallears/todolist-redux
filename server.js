"use strict";

const express = require('express');

const bodyParser = require('body-parser');
const app = new express();
const todos = [];
let id = 0;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./views'));

app.use(express.static('./public'));
app.use(express.static('./dist'));

app.get('/todolist', (req, res) => {
    res.json(todos);
});

app.post('/addtodos', (req, res)=> {
    todos.push({id: id++, text: req.body.text, isDone: false});
    res.json(todos);
});

app.delete('/deltodos', (req, res)=> {
    const index = todos.find(todo => todo.id === req.body)
    todos.splice(index, 1);
    res.json(todos)
})

app.post('/changestate', (req, res)=> {
    todos[req.body.index].isDone=!todos[req.body.index].isDone;
    res.json(todos)
})

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('listening at port %s', port);
});

