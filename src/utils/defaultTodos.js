"use strict";
// import { v4 as uuidv4 } from 'uuid'
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTodos = void 0;
var id1 = '63d53d4c-9533-43f5-a9e5-7039eb30eb3c';
var id2 = '5ceb78d4-1f0f-4680-993e-b0835e994751';
var id3 = '2fcfe288-28f4-42ce-a823-f95912f0e910';
console.log("Default Todos ID: 1: ".concat(id1, ", 2: ").concat(id2, ", 3: ").concat(id3));
exports.defaultTodos = [
    { id: id1, title: 'Todo 1', done: true },
    { id: id2, title: 'Todo 2', done: false },
    { id: id3, title: 'Todo 3', done: true },
];
exports.default = exports.defaultTodos;
