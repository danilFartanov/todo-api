import defaultTodos from "./src/utils/defaultTodos";

const express = require('express')

const todos = [...defaultTodos];

const app = express()

app.use(express.json())
const port = 8080

app.get('/api/v1/todos', (req, res) => {
    res.end(JSON.stringify(todos));
})

app.post('/api/v1/todos', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.body));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
