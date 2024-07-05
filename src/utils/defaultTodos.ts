import { v4 as uuidv4 } from 'uuid'

export const defaultTodos = [
    { id: uuidv4(), title: 'Todo 1', done: true },
    { id: uuidv4(), title: 'Todo 2', done: false },
    { id: uuidv4(), title: 'Todo 3', done: true },
];


export default defaultTodos;