"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultTodos_1 = require("./src/utils/defaultTodos");
var uuid_1 = require("uuid");
var express = require('express');
var todos = defaultTodos_1.default; // array
// console.log(todos)
// console.log(todos.find(todo => todo.id === "5ceb78d4-1f0f-4680-993e-b0835e994751"))
var app = express();
app.use(express.json());
var port = 8080;
app.get('/api/v1/todos', function (req, res) {
    res.end(JSON.stringify(todos));
});
app.get('/api/v1/todos/:id', function (req, res) {
    var id = req.params.id;
    var todo = todos.find(function (todo) { return todo.id === id; });
    res.end(JSON.stringify(todo));
});
app.post('/api/v1/todos', function (req, res) {
    todos.push({ id: (0, uuid_1.v4)(), title: req.body.title, done: false });
    res.end('Todo is created');
});
app.put('/api/v1/todos/:id', function (req, res) {
    var id = req.params.id;
    var todo = todos.find(function (todo) { return todo.id === id; });
    todo.title = req.body.title;
    todo.done = req.body.done;
    res.end('Todo is updated');
});
app.delete('/api/v1/todos/:id', function (req, res) {
    var id = req.params.id;
    todos = todos.filter(function (todo) { return todo.id !== id; });
    res.end('Todo is deleted');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
// TODO: MAKE COMMIT - CREATED API's
