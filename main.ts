import defaultTodos from "./src/utils/defaultTodos";
import { v4 as uuidv4 } from 'uuid'

const express = require('express')

let todos = defaultTodos; // array
// console.log(todos)

// console.log(todos.find(todo => todo.id === "5ceb78d4-1f0f-4680-993e-b0835e994751"))

const app = express()

app.use(express.json())
const port = 8080

app.get('/api/v1/todos', (req, res) => {
    res.end(JSON.stringify(todos));
})

app.get('/api/v1/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === id);
    res.end(JSON.stringify(todo));
})

app.post('/api/v1/todos', (req, res) => {
    todos.push({id: uuidv4(), title: req.body.title, done: false});
    res.end('Todo is created');
})

app.put('/api/v1/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === id);
    todo.title = req.body.title;
    todo.done = req.body.done;
    res.end('Todo is updated');
})

app.delete('/api/v1/todos/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(todo => todo.id !== id)
    res.end('Todo is deleted');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

