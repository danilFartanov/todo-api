// import { v4 as uuidv4 } from 'uuid'

const id1 = '63d53d4c-9533-43f5-a9e5-7039eb30eb3c'
const id2 = '5ceb78d4-1f0f-4680-993e-b0835e994751'
const id3 = '2fcfe288-28f4-42ce-a823-f95912f0e910'

console.log(`Default Todos ID: 1: ${id1}, 2: ${id2}, 3: ${id3}`)

export const defaultTodos = [
    { id: id1, title: 'Todo 1', done: true },
    { id: id2, title: 'Todo 2', done: false },
    { id: id3, title: 'Todo 3', done: true },
];

export const defaultTodosSecondVersion = [
    { id: id1, title: 'Todo 1', done: true, type: 'usual' },
    { id: id2, title: 'Todo 2', done: false, type: 'usual' },
    { id: id3, title: 'Todo 3', done: true, type: 'usual' },

    { id: id1, title: 'Todo 1', done: false, type: 'clearOnly' },
    { id: id2, title: 'Todo 2', done: false, type: 'clearOnly' },
    { id: id3, title: 'Todo 3', done: false, type: 'clearOnly' },

    { id: id1, title: 'Todo 1', done: false, type: 'archiveOnly' },
    { id: id2, title: 'Todo 2', done: false, type: 'archiveOnly' },
    { id: id3, title: 'Todo 3', done: false, type: 'archiveOnly' },

];
