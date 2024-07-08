import defaultTodos from "./utils/defaultTodos";
import { v4 as uuidv4 } from 'uuid'
import { Request, Response } from 'express';
import express = require('express');
const cors = require('cors')


let todos = defaultTodos; // array

const app = express()

app.use(express.json())
app.use(cors())

const port = 8080

app.get('/api/v1/todos', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(todos));
})

app.get('/api/v1/todos/:id', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === id);
    res.end(JSON.stringify(todo));
})

app.post('/api/v1/todos', (req: Request, res: Response) => {
    todos.push({id: uuidv4(), title: req.body.title, done: false});
    res.end('Todo is created');
})

app.put('/api/v1/todos/completed', (req: Request, res: Response) => {
    todos = todos.filter(todo => !todo.done);
    res.status(200).send();
})

app.patch('/api/v1/todos/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    let todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.done = req.body.done;
    } else {
        res.status(404).send("No todos found!");
    }

    res.end('Todo is updated');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

